import React, { Component } from 'react';  //Always need in JSX files



// Create the HTML to return for the input
class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term: ''};
  }


  render() {
    return (
      <div>
        <input
          value= {this.state.term}
          onChange={(event) => this.setState( {term:event.target.value} )} />

      </div>
    )
  }




}

//We need to export to index.js to display
export default SearchBar;
//means any file that imports searchBar
//will only get the searchBar component
