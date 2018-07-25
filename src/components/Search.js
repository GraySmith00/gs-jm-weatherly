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

  handleSuggestionClick = e => {
    e.preventDefault();
    this.setState({
      searchValue: e.target.innerText
    });
    this.props.setLocation(e.target.innerText);
    this.resetSearch();
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
    const { autoCompleteResults, searchValue } = this.state;
    return (
      <div className="search-container">
        <div className="search-wrapper">
          {this.props.notFoundError && (
            <p className="error-text">
              Location not found 😢... use 'City, ST'
            </p>
          )}
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
              {searchValue.length > 0 && (
                <div className="autocomplete-list">
                  {autoCompleteResults.map((result, i) => {
                    return (
                      <div
                        key={`result${i}`}
                        className="item"
                        onClick={e => this.handleSuggestionClick(e)}
                      >
                        {result}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <input type="submit" value="Search" />
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
