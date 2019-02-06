import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = ({ images }) => {
  const theimages = images.map(image => {
    return (
      <ImageCard key={image.id} image={image}/>
    )
  });
  return <div className="image-list">{theimages}</div>;

};

export default ImageList
