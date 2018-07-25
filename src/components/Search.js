import React, { Component } from 'react';
import '../css/Search.css';
import { PrefixTrie } from 'complete-me';
import citiesList from '../utils/citiesList';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      prefixTrie: null,
      autoCompleteResults: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.setLocation(this.state.searchValue);
    this.resetSearch();
  };

  handleChange = e => {
    this.setState({
      searchValue: e.target.value
    });
    this.showSearchResults(e.target.value);
  };

  resetSearch = () => {
    this.setState({
      searchValue: ''
    });
  };

  showSearchResults = input => {
    const results = this.state.prefixTrie.suggest(input);
    this.setState({
      autoCompleteResults: results
    });
  };

  componentDidMount() {
    const prefixTrie = new PrefixTrie();
    prefixTrie.populate(citiesList.data);
    this.setState({
      prefixTrie
    });
  }

  render() {
    const { autoCompleteResults } = this.state;
    return (
      <div className="search-container">
        <div className="search-wrapper">
          <form
            className="search-form"
            onSubmit={e => this.handleSubmit(e)}
            autoComplete="off"
          >
            <div className="autocomplete">
              <input
                className="search-input"
                type="search"
                placeholder="Denver, CO..."
                value={this.state.searchValue}
                onChange={e => this.handleChange(e)}
              />
              <div className="autocomplete-list">
                {autoCompleteResults.map(result => {
                  return <div className="item">{result}</div>;
                })}
              </div>
            </div>
            <input type="submit" value="Search" />
          </form>
          {this.props.notFoundError && (
            <p className="error-text">location not found</p>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
