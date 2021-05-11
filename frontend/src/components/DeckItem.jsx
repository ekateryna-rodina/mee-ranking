import { Image } from "cloudinary-react";
import React from "react";

const DeckItem = (props) => {
  const {name, image} = props
  return (
    <div>
      <Image className="rounded mx-1" width="75" cloudName="kariecloud" publicId={image} />
      <span>{name}</span>
    </div>
  );
};

export default DeckItem;
