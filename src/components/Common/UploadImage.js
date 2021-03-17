import React, { useCallback, useEffect, useState } from "react";
import Avatar from "../Common/Avatar";
import { useDropzone } from "react-dropzone";

const UploadImage = ({ avatar, setAvatar }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    if (avatar) {
      avatar.preview ? setAvatarUrl(avatar.preview) : setAvatarUrl(avatar);
    } else {
      setAvatarUrl(null);
    }
  }, [avatar]);

  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];
      setAvatar({ file, preview: URL.createObjectURL(file) });
    },
    [setAvatar]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    onDrop,
  });

  return (
    <div className="upload-image" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Avatar name="Alan" size="4rem" fontSize="1.5rem" />
      ) : (
        <Avatar name="Alan" size="4rem" avatar={avatarUrl} />
      )}
    </div>
  );
};

export default UploadImage;
