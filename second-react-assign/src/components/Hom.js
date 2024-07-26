import React, { Component } from "react";
import "../styles/main.scss";
import slide1 from "../images/slider/slide1.jpg";
import slide2 from "../images/slider/slide2.jpg";
import slide3 from "../images/slider/slide3.jpg";
import slide4 from "../images/slider/slide4.jpg";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      slides: [
        { id: 1, imagePath: slide1, isActive: true },
        { id: 2, imagePath: slide2, isActiv: false },
        { id: 3, imagePath: slide3, isActiv: false },
        { id: 4, imagePath: slide4, isActiv: false },
      ],
      currentSlideIndex: 0,
      currentSlide: {},
    };
  }

  componentDidMount() {
    this.setState({
      currentSlide: this.state.slides[this.state.currentSlideIndex],
    });
  }

  previousSlide = () => {
    this.state.currentSlideIndex > 0 &&
    this.setState((prevState) => ({
      currentSlideIndex: prevState.currentSlideIndex - 1,
    }));
    this.setState({
      currentSlide: this.state.slides[this.state.currentSlideIndex],
    });
  };

  nextSlide = () => {
    this.state.currentSlideIndex < this.state.slides.length - 1 &&
      this.setState((prevState) =>
         ({
        currentSlideIndex: prevState.currentSlideIndex + 1,
      }));
    this.setState({
      currentSlide: this.state.slides[this.state.currentSlideIndex],
    });
  };

  render() {
    return (
      <div>
        <div className="image-slider">
          <img src={this.state.currentSlide.imagePath} alt="" />
          <button onClick={this.previousSlide} className="previous-btn">
            Previous Slide
          </button>
          <button onClick={this.nextSlide} className="next-btn">
            Next Slide
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
