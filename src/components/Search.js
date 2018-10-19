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
      autoCompleteResults: [],
      cursor: -1
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.setLocation(this.state.searchValue);
    this.resetSearch();
  };

  handleInputChange = e => {
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

  handleInputKeyDown = e => {
    const { cursor, autoCompleteResults } = this.state;
    if (e.keyCode === 38 && cursor > 0) {
      this.setState({
        cursor: this.state.cursor - 1,
        searchValue: autoCompleteResults[cursor + 1]
      });
    } else if (
      e.keyCode === 40 &&
      cursor < this.state.autoCompleteResults.length - 1
    ) {
      this.setState({
        cursor: this.state.cursor + 1,
        searchValue: autoCompleteResults[cursor + 1]
      });
    } else if (e.keyCode === 13 && cursor > -1) {
      e.preventDefault();
      this.setState({
        cursor: -1,
        searchValue: autoCompleteResults[cursor + 1]
      });
      this.props.setLocation(autoCompleteResults[cursor]);
      this.resetSearch();
    }
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
    const { autoCompleteResults, searchValue, cursor } = this.state;
    return (
      <div className="search-container">
        <div className="search-wrapper">
          {this.props.notFoundError && (
            <p className="error-text">
              Location not found{' '}
              <span role="img" aria-label="sad-face">
                😢
              </span>
              ... use 'City, ST'
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
                placeholder="Moab, UT..."
                value={this.state.searchValue}
                onChange={e => this.handleInputChange(e)}
                onKeyDown={e => this.handleInputKeyDown(e)}
              />
              {searchValue.length > 0 && (
                <div className="autocomplete-list">
                  {autoCompleteResults.map((result, i) => {
                    return (
                      <div
                        key={`result${i}`}
                        onClick={e => this.handleSuggestionClick(e)}
                        className={cursor === i ? 'item active' : 'item'}
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
