import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Navbar";
import Search from "./Search";
import axios from "axios";
import MovieList from "./movieList";
import Pagination from "./Pagination";
import MovieInfo from "./MovieInfo";
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  constructor(){
    super()
    this.state = {
      movies:[],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null
    }
    this.apiKey = "3e3f978aed8dd945a825a1017c89291f"
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`).then(res=> res.json())
    .then(res=>{
      console.log(res)
      this.setState({movies:[...res.results],totalResults: res.total_results})
    }).catch((err)=>{
      console.log(err)
    })
  }

  handleChange = (e)=> {
    this.setState({searchTerm: e.target.value})

  }

  nextPage = (pageNumber)=>{
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`).then(res=> res.json())
    .then(res=>{
      console.log(res)
      this.setState({movies:[...res.results],currentPage:pageNumber})
    }).catch((err)=>{
      console.log(err)
    })
  }

  viewMovieInfo = (id)=>{
    const filteredMovie = this.state.movies.filter(movie => movie.id == id) 
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
    this.setState({currentMovie: newCurrentMovie})
  }
  closeMovieInfo = ()=>{
    this.setState({currentMovie:null})
  }
  render(){
    const numberOfPages = (this.state.totalResults/15);
    return (
      <>
      <Router>
      <div className="App">
        <Navbar />
        {
        this.state.currentMovie == null ? 
           <div><Search handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
             <MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/>
           </div>
           :
          <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo}/> 
        }  
        {this.state.totalResults > 15 && this.state.currentMovie==null ? <Pagination pages={numberOfPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : "" }
      </div>
      </Router>
       
      </>
     
    );
  }
}

export default App;
