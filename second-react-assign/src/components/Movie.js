import React, { Component } from 'react';
import "../styles/main.scss";

class Movie extends Component {
   
    render() { 
        const{title,year,director,genre, poster}= this.props;
           
        return (
            <div className='movie-box'>
                <img src={poster} alt=''/>
                <h3>{title}</h3>
                <p>{director}{year}</p>
                <p>{genre}</p>
            </div>
        );
    }
}
 
export default Movie;