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
    this.props.setLocalStorage(this.state.searchValue)
  }

  render() {
    return (
      <div className="search-wrapper">
        <form
          onSubmit={e => this.handleSubmit(e)}
        >
          <input
            type="text"
            onChange={e =>
              this.setState({ searchValue: e.target.value.replace(' ', '_') })
            }
          />
          <button>SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default Search;
