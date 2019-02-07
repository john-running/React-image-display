import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = ({ images, term, termCount }) => {
  let theimages = null
  let responseHeaderMessage = null
  console.log(termCount)
  if (termCount > 4) {
    responseHeaderMessage = <div>There are {termCount} results for <strong>"{term}"</strong></div>
    theimages = images.map(image => {
      return (
        <ImageCard key={image.id} image={image}/>
      )
    });
  } else if (term) {
    responseHeaderMessage = <div>Sorry there were fewer than 20 results for <strong>"{term}"</strong>.&nbsp;Here are 20 dog pictures instead:</div>
    theimages = images.map(image => {
      return (
        <ImageCard key={images.id} image={image}/>
      )
    });
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
