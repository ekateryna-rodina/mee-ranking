import React from "react";
import Dropzone from "react-dropzone";

interface IFileUploaderProps {
  setFile: Function;
}
const FileUploader = (props: IFileUploaderProps) => {
  const { setFile } = props;
  async function dropFileHandler(file: any) {
    setFile(file[0]);
  }
  return (
    <Dropzone onDrop={(file) => dropFileHandler(file)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default FileUploader;
