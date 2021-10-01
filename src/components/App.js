
import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom'; 

//Components
import Nav from './Nav';
import NotFound from './NotFound';
import PhotoContainer from './PhotoContainer';
import Search from './Search';

import apiKey from '../config';


class App extends Component {
  //define the initial state
    constructor(props) {
      super()
      this.state = {
        photos: [],
        london: [], 
        oporto: [], 
        amsterdam: [],
        loading: true, 
      };
    }
  
    componentDidMount() {
        this.performSearch();
        this.londonPics();
        this.oportoPics();
        this.amsterdamPics();
        this.romePics();
    }

      //search functionality
    performSearch = (query) => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}s&per_page=24&format=json&nojsoncallback=1`)
          .then(
            response => response.json()
          )
          .then( responseData => {
            this.setState({ photos: responseData.photos.photo, loading: false})
          })
          .catch(
            error => console.log('Error fecthing and parsing data', error)
          );
      
    };

    //London Pictures on btn click
    londonPics = (query = 'london') => {
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}s&per_page=24&format=json&nojsoncallback=1`)
      .then(
        response => response.json()
      )
      .then( responseData => {
        this.setState({ london: responseData.photos.photo, loading: false})
      })
      .catch(
        error => console.log('Error fecthing and parsing data', error)
      );
    };
    
    //Oporto Pictures on btn click
    oportoPics = (query = 'oporto') => {
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}s&per_page=24&format=json&nojsoncallback=1`)
      .then(
        response => response.json()
      )
      .then( responseData => {
        this.setState({ oporto: responseData.photos.photo, loading: false})
      })
      .catch(
        error => console.log('Error fecthing and parsing data', error)
      );
    };
    

    //Amsterdam Pictures on btn click
    amsterdamPics = (query = 'amsterdam') => {
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}s&per_page=24&format=json&nojsoncallback=1`)
      .then(
        response => response.json()
      )
      .then( responseData => {
        this.setState({ amsterdam: responseData.photos.photo, loading: false})
      })
      .catch(
        error => console.log('Error fecthing and parsing data', error)
      );
    };
    
    //Rome Pictures on btn click
    romePics = (query = 'rome') => {
      fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}s&per_page=24&format=json&nojsoncallback=1`)
      .then(
        response => response.json()
      )
      .then( responseData => {
        this.setState({ rome: responseData.photos.photo})
      })
      .catch(
        error => console.log('Error fecthing and parsing data', error)
      );
    };
    
    //Render all components into the page
    render() {
      console.log(this.state.photos);
      return (
        <div className='container'>
          <Search onSearch={this.performSearch} />
          <Nav />
          {this.state.loading ? (
            <h2>Loading...Be Patient</h2>
          ) : (
          <Switch>
            <Route path='/search/:query' render={() => <PhotoContainer responseData={this.state.photos} />} />
            <Route exact path='/' render={() => <Redirect to='/london' />} />
            <Route path='/london' render={() => <PhotoContainer responseData={this.state.london} />} />
            <Route path='/oporto' render={() => <PhotoContainer responseData={this.state.oporto} />} />
            <Route path='/amsterdam' render={() => <PhotoContainer responseData={this.state.amsterdam} />} />
            <Route path='/rome' render={() => <PhotoContainer responseData={this.state.rome} />} />
            <Route component={NotFound} />
          </Switch>
          )}
        </div>
          
      );
      
      }
}

export default App;