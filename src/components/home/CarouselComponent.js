import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button
} from "reactstrap";

const items = [
  {
    src: require("../../asset/image/image1.jpg"),
    altText: "Ini adalah Txt",
    caption: "INi adalah text",
    text: "ini adalah text bawah",
    button: "button aja"
  },
  {
    src: require("../../asset/image/image4.jpg"),
    altText: "",
    caption: "",
    text: "",
    button: "JUdul button"
  },
  {
    src: require("../../asset/image/image2.jpg"),
    altText: "",
    caption: "",
    text: "",
    button: "button aja"
  }
];

const CarouselComponent = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <CarouselCaption
          className="carousel-text"
          captionText={item.text}
          captionHeader={item.caption}
        />
        <Button>{item.button}</Button>
        <img
          src={item.src}
          alt={item.altText}
          style={{ width: "100%", maxHeight: "60%" }}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default CarouselComponent;