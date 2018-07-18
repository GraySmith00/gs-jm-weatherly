import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <form 
          onSubmit={(e ) => {
            e.preventDefault();
            this.props.setCity()
          }} 
          >
          <button>SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default Search;