import React from 'react';
// import PropTypes from 'prop-types';
import {
  ImageGalleryItem,
  ImageGalleryItemIMG,
} from './ImageGalleryItem.styled';

export const GalleryItem = ({ images }) => {
  return images.map(image => {
    return (<ImageGalleryItem key={image.id}>
      <ImageGalleryItemIMG src={image.webformatURL} alt={image.tags} />
    </ImageGalleryItem>)
  });
}

// ImageGalleryItem.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
