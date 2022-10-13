import React from 'react';
// import PropTypes from 'prop-types';
import { ImageGallery } from './ImageGallery.styled';

export const ImageGalleryList = ({children}) => {
    return <ImageGallery>{children}</ImageGallery>;
}

// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
