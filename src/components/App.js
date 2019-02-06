import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
state = {images: [], term: ''};

  onSearchSubmit = async term => {
    const response = await unsplash.get('search/photos', {
      params: { query: term,
                per_page: 100
      },
    });
    //console.log(response.data.results)
    this.setState({ images: response.data.results, term: term })
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images = {this.state.images} term = {this.state.term}/>
      </div>
    );
  }
}

export default App
