import React from 'react';

export default function ImageGalleryItem(props) {
    // console.log(props.item);
  return (
    <li className="ImageGalleryItem">
        <img src={props.item.previewURL} alt="" className="ImageGalleryItem-image" />
    </li>
  )
}