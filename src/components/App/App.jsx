import React, { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import * as API from '../../services/api';
import { ImageGalleryList } from 'components/ImageGalleryList/ImageGalleryList';
import { GalleryItem } from 'components/GalleryItem/GalleryItem';

export class App extends Component {
  state = {
    images: null,
    searchQuery: '',
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true })
    this.handleSubmit();
    const images = await API.getImages(this.state.searchQuery, 1);
  //  console.log(images);
    this.setState({ images: images, isLoading: false });
  }

//   async componentDidUpdate(prevProps, prevState) {
//     if (prevState.images !== this.state.images) {
//       // this.setState({ isLoading: true });
//       const images = await API.getImages(this.state.searchQuery, 1);     
//       this.setState({ images: images, isLoading: false });
//   }
// }

  handleSubmit = searchQuery => {
    this.setState({ searchQuery: searchQuery });
    console.log(this.state.searchQuery);
    console.log(searchQuery);
  };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.handleSubmit} />
        {this.state.isLoading && <h1>Loading...</h1>}
        {this.state.images && (
          <ImageGalleryList images={this.state.images}>
            <GalleryItem />
          </ImageGalleryList>
        )}
      </>
    );
  }
}
