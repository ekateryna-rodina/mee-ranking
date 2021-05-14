import { gql, useMutation } from "@apollo/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemAction } from "../state/deck/deckActions";
import { AppState } from "../state/store";
import FileUploader from "./FileUploader";

const SAVE_ITEM_MUTATION = gql`
  mutation createItem($topicId: ID!, $name: String!, $image: String) {
    createItem(topicId: $topicId, name: $name, image: $image) {
      id
      name
      image
      topic {
        id
        title
      }
    }
  }
`;
const CreateItem = () => {
  const [itemInfo, setItemInfo] = useState<{
    name: string;
    file: null | Blob | string;
  }>({
    name: "",
    file: null,
  });
  const [saveItem, { data, error, loading }] = useMutation(SAVE_ITEM_MUTATION);
  const dispatch = useDispatch();
  const state = useSelector((state: AppState) => state.deck);
  const {
    topic: { id: topicId },
  } = state;
  const submitFileToStorage = async () => {
    if (itemInfo.file) {
      const [cloudName, uploadPreset] = [
        process.env.REACT_APP_CLOUD_NAME,
        process.env.REACT_APP_UPLOAD_PRESET ?? "",
      ];
      const formData = new FormData();
      formData.append("file", itemInfo.file);
      formData.append("upload_preset", uploadPreset);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
        formData
      );
      return response.data.public_id;
    }
  };

  const addToListHandler = async (e: React.MouseEvent) => {
    let imageId = null;
    if (itemInfo.file) {
      imageId = await submitFileToStorage();
    }

    const variables = {
      topicId,
      name: itemInfo.name,
      image: imageId?.toString() || "",
    };
    saveItem({
      variables,
    });
  };

  const dropFileHandler = (file: Blob | string | null) => {
    setItemInfo({ ...itemInfo, file });
  };
  useEffect(() => {
    if (error) {
      console.log(`Items creation failed with error message ${error.message}`);
    }
    if (data) {
      const { name, image } = data.createItem;
      dispatch(addItemAction({ name, imagePath: image }));
      setItemInfo({ ...itemInfo, name: "" });
    }
    // eslint-disable-next-line
  }, [data, error]);
  return (
    <div className="form-group">
      <label htmlFor="item">Item Name</label>
      <input
        className="form-control"
        type="text"
        id="item"
        value={itemInfo.name}
        data-testid="itemInput"
        onChange={(e) => setItemInfo({ ...itemInfo, name: e.target.value })}
      />

      <FileUploader setFile={dropFileHandler} />

      <button data-testid="addToListButton" onClick={addToListHandler}>
        Add
      </button>
    </div>
  );
};

export default CreateItem;
