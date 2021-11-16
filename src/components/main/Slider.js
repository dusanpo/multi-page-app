import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2017/06/14/03/00/coffe-2400874_960_720.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="coffeHeader">Coffee</h2>
            <p className="paragraph">
              Good ideas start with good coffee.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2018/10/15/18/24/beer-3749664_960_720.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h2 className="beerHeader">Beer</h2>
            <p className="paragraph">
              He was a wise man who invented beer.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.pixabay.com/photo/2021/10/09/02/23/cocktail-6692791_960_720.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h2 className="cocktailHeader">Cocktail</h2>
            <p className="paragraph">
              The greatest adventures happen after cocktails.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
