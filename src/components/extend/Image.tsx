"use client";
import { ImageProps } from "next/image";
import { FC, useState } from "react";

import NextImage from "next/image";

const Image: FC<ImageProps> = ({ src, ...props }) => {
  const [imgSrc, setSrc] = useState(src); // initial image source

  // callback function for onError prop
  const handleError = () => {
    setSrc("/imgNotFound.png"); // custom image source
  };

  return (
    <NextImage {...props} src={imgSrc} quality={100} onError={handleError} />
  );
};

export default Image;
