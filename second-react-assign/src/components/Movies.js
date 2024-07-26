import React, { Component } from "react";
import "../styles/main.scss";
import axios from "axios";
import Movie from "./Movie";
import Menu from "./Menu";

let tempGenre = [];
let tempOBJ = [];
let finalArray = [];
let genres=[];

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      moviesData: [],
      movieGenre: [],
      movieTitle: "",
      titleArray: [],
      genresArray:[]
    };
  }
  componentDidMount() {
    axios.get("movies.json").then((response) =>
      this.setState({ moviesData: response.data }, function () {
        this.state.moviesData.map((movie) => {
          tempGenre.push(movie.Genre.split(","));
          tempGenre.map((tmpArray) => {
            for (let index = 0; index < tmpArray.length; index++) {
              tempOBJ = tempOBJ.concat(tmpArray[index]);
            }
            return null;
          });
          return null;
        });
        tempOBJ.forEach((item) => {
          if (!finalArray.includes(item)) {
            finalArray.push(item);
          }

          this.setState({ movieGenre: finalArray });
        });
      })
    );
  }
//__________________________________________________________________________
  findMovie = (event) => {
    let moviesTitleData = [];
    this.setState(
      { movieTitle: event.target.value.toLowerCase() },
      function () {
        this.state.moviesData.map(
          (movie) =>
            movie.Title.toLowerCase().includes(this.state.movieTitle)&&
            moviesTitleData.push(movie)
        );
        this.setState({ titleArray: moviesTitleData });
      }
    );
  };

  // _________________________________________________________________
  findGenre=(genre)=>{
    genres.push(genre)
    this.setState({genresArray:genres})
}
//_________________________________________________________________________
  render() {
    return (
      <div className="movies-section">
        <div className="movies-container">
          {this.state.titleArray.length === 0
            ? this.state.moviesData.map((movie) => (
                <Movie
                  key={movie.Id}
                  title={movie.Title}
                  year={movie.Year}
                  director={movie.Director}
                  genre={movie.Genre}
                  poster={movie.Poster}
                ></Movie>
              ))
            : this.state.titleArray.map((movie) => (
                <Movie
                  key={movie.Id}
                  title={movie.Title}
                  year={movie.Year}
                  director={movie.Director}
                  genre={movie.Genre}
                  poster={movie.Poster}
                ></Movie>
              ))}
        </div>

        <div className="menu-container">
          <input
            type="text"
            placeholder="search by movie title..."
            onChange={this.findMovie}
          />
          {this.state.movieGenre.map((genre) => (
            <Menu genre={genre} findGenre={this.findGenre}></Menu>
            
          ))}
        </div>
      </div>
    );
  }
}

export default Movies;
