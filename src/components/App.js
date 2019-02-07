import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
state = {images: [], term: ''};

  onSearchSubmit = async term => {
    let response = await unsplash.get('search/photos', {
      params: { query: term,
                per_page: 20
      },
    });
    const termCount = response.data.results.length;

    if (termCount < 20 ) {
      response = await unsplash.get('search/photos', {
        params: { query: 'dog',
                  per_page: 20
        },
      });
    }

    this.setState({ images: response.data.results, term: term, termCount: termCount})
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images = {this.state.images} term = {this.state.term} termCount = {this.state.termCount}/>
      </div>
    );
  }
}

export default App
