import React, { Component } from "react";
import { Link,Route, Routes } from "react-router-dom";
import Home from "./components/Hom";
import Movies from "./components/Movies";
import AboutUs from "./components/AboutUs";
import "./styles/main.scss";

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="movies">Movies</Link></li>
                <li><Link to="about-us">AboutUs</Link></li>
            </ul>

        </div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
        </Routes>
      </div>
    );
  }
}

export default App;






