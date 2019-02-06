import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = ({ images, term }) => {
  let theimages = null
  let responseHeaderMessage = null

  if (images.length > 0) {
    responseHeaderMessage = <div>Results for <strong>"{term}"</strong></div>
    theimages = images.map(image => {
      return (
        <ImageCard key={image.id} image={image}/>
      )
    });
  } else if (term) {
    responseHeaderMessage = <div>Sorry no results for <strong>"{term}"</strong></div>
  }

  return (
    <div>
    {responseHeaderMessage}
    <br />
    <div className="image-list">{theimages}</div>
    </div>
  );
};

export default ImageList
