import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import {
  Searchbar,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from '../SearchBar/SearchBar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export class SearchBar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value.toLowerCase() });
    // console.log(e.target.value);
  };

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.searchQuery.trim() === '') {
            Notiflix.Notify.warning('Enter word to find images');
            return
        }
        this.props.onSubmit(this.state.searchQuery);
        this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <AiOutlineSearch />
          </SearchFormBtn>

          <SearchFormInput
            onChange={this.handleChange}
            type="text"
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
