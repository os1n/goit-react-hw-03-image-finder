import React, { Component } from "react";
import axios from 'axios'
import "./App.css";

import SearchBar from "./Searchbar/Searchbar"
import ImageGallery from './ImageGallery/ImageGallery'


class App extends Component {
  state = {
    articles: [],
    loading: false,
    error: null,
    key: '17813199-14e2fb5ae7849e8e0c0c28a8e',
  }

  componentDidMount() {
    this.setState({loading: true});
    // console.log(`https://pixabay.com/api/?q=${'trees'}&page=1&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`)
    axios
    .get(`https://pixabay.com/api/?q=${'trees'}&page=1&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => { 
      // console.log(response);
      this.setState({articles: response.data.hits})})
    .catch(error => this.setState({error}))
    .finally(() => this.setState({loading: false}))
    // () => {console.log(this.state.articles)};
  }

  render() {
    // console.log(this.state.articles);
  return (
    <div className="App">
      <SearchBar />
      <ImageGallery articles={this.state.articles}/>
    </div>
  );
  }
}

export default App;
