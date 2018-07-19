import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: ''
    };
  }

  // splitInput = () => {
  //   const city = this.state.searchValue.split(', ')[0];
  //   const state = this.state.searchValue.split(', ')[1];

  //   this.setState({
  //     searchValue: this.state.searchValue,
  //     city: city,
  //     state: state
  //   });
  // };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.setLocation(this.state.searchValue);
          }}
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
