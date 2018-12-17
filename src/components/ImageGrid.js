import React from "react";
import "./ImageGrid.css";

const ImageGrid = ({ images }) => {
  const imageGallery = images.map(image => {
    return (
      <img src={image.urls.regular} alt={image.description} key={image.id} />
    );
  });
  return <div className="image-grid">{imageGallery}</div>;
};

export default ImageGrid;
