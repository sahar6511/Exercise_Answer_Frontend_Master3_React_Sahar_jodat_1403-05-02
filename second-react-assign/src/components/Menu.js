import React, { Component } from 'react';
import "../styles/main.scss";

class menu extends Component {
   
  
    render() { 
        const{genre,findGenre}= this.props;
           
        return (
            <div>
                <button onClick={()=>findGenre(genre)}>{genre}</button>
            </div>
        );
    }
}
 
export default menu;