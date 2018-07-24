import React, { Component } from 'react';
import '../css/Search.css';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.setLocation(this.state.searchValue);
    this.resetSearch()
  }

  resetSearch = () => {
    this.setState({
      searchValue: ''
    })
  }

  render() {
    return (
      <div className="search-wrapper">
        <form onSubmit={e => this.handleSubmit(e)} >
          <input
            type="text"
            value={this.state.searchValue}
            onChange={e =>
              this.setState({ searchValue: e.target.value })
            }
          />
          <button>SUBMIT</button>
        </form>
        {this.props.notFoundError &&
          <p className="error-text">location not found</p>
        } 
      </div>
    );
  }
}

export default Search;
