import { cloudinaryClient } from "@/utils/cloudinary/cloudinaryClient";
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from "@cloudinary/react";
import { fit } from "@cloudinary/url-gen/actions/resize";
import React, { useState } from "react";

interface CloudinaryImageProps {
  src: string;
  width?: number;
  height?: number;
  lazy?: boolean;
  className?: string;
}

const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  src,
  className,
  height,
  width,
  lazy,
}) => {
  let cldImage = cloudinaryClient
    .image(`portfolio-renew/${src}`)
    .quality("auto");

  if (width && height) {
    cldImage = cldImage.resize(fit().width(width).height(height));
  }

  const plugins = [responsive(), placeholder({ mode: "blur" })];

  if (lazy) {
    plugins.push(lazyload());
  }

  return (
    <AdvancedImage
      cldImg={cldImage}
      plugins={plugins}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default CloudinaryImage;
