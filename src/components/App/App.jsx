import React, { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
// import * as API from '../../services/api';
import axios from 'axios';
import { ImageGalleryList } from 'components/ImageGalleryList/ImageGalleryList';
import { GalleryItem } from 'components/GalleryItem/GalleryItem';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '29443813-ca22e65ccc725dfd305ed5d5a';

export class App extends Component {
  state = {
    images: null,
    searchQuery: '',
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true })
    this.handleSubmit();
    const options = {
      params: {
        q: this.state.searchQuery,
        page: 1,
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    };
    const response = await axios.get('/', options);
    this.setState({ images: response.data.hits, isLoading: false });
  }

  handleSubmit = searchQuery => {
    this.setState({ searchQuery: searchQuery });
    // console.log(this.state.searchQuery);
    // console.log(searchQuery);
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {this.state.isLoading && <h1>Loading...</h1>}
        {this.state.images && (
          <ImageGalleryList>
            <GalleryItem images={this.state.images} />
          </ImageGalleryList>
        )}
      </>
    );
  }
}
