import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default function SearchBar(props) {
    console.log(props.articles);
  return (
  <ul className="ImageGallery">
      {props.articles.map(article => (<ImageGalleryItem item={article}/>) )}
  </ul>)
}
