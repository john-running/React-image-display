import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = ({ images, term }) => {
  let theimages = null
  let responseHeaderMessage = null

  if (images.length > 0) {
    responseHeaderMessage = `Results for "${term}"`
    theimages = images.map(image => {
      return (
        <ImageCard key={image.id} image={image}/>
      )
    });
  } else if (term) {
    responseHeaderMessage = `Sorry no results for "${term}"`
  }

  return (
    <div>
    <h2>{responseHeaderMessage}</h2>
    <br />
    <div className="image-list">{theimages}</div>
    </div>
  );
};

export default ImageList
