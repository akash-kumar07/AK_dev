import React from "react";
import * as classes from "./Carousel.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Carousel = () => {
  const data = [
    {
      story:
        "To provide quality and innovative products to health care professionals in the Middle East and South East Asia.To attain a highest level of customer satisfaction through the quality of our product portfolio and services. To utilize the combined knowledge and experience of our advisory panel of",
      name: "Steve Gibson",
      designation: "Specialist Gynecologist Germany",
      img:
        "https://images.unsplash.com/photo-1612783482540-75dbb2190d9a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA4fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      story:
        "To provide quality and innovative products to health care professionals in the Middle East and South East Asia.To attain a highest level of customer satisfaction through the quality of our product portfolio and services. To utilize the combined knowledge and experience of our advisory panel of",
      name: "Steve Gibson",
      designation: "Specialist Gynecologist Germany",
      img:
        "https://images.unsplash.com/photo-1582804905556-0605e6433015?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      story:
        "To provide quality and innovative products to health care professionals in the Middle East and South East Asia.To attain a highest level of customer satisfaction through the quality of our product portfolio and services. To utilize the combined knowledge and experience of our advisory panel of",
      name: "Steve Gibson",
      designation: "Specialist Gynecologist Germany",
      img:
        "https://images.unsplash.com/photo-1592023031338-ee30ef94abbc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzF8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      story:
        "To provide quality and innovative products to health care professionals in the Middle East and South East Asia.To attain a highest level of customer satisfaction through the quality of our product portfolio and services. To utilize the combined knowledge and experience of our advisory panel of",
      name: "Steve Gibson",
      designation: "Specialist Gynecologist Germany",
      img:
        "https://images.unsplash.com/photo-1541577141970-eebc83ebe30e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzV8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      story:
        "To provide quality and innovative products to health care professionals in the Middle East and South East Asia.To attain a highest level of customer satisfaction through the quality of our product portfolio and services. To utilize the combined knowledge and experience of our advisory panel of",
      name: "Steve Gibson",
      designation: "Specialist Gynecologist Germany",
      img:
        "https://images.unsplash.com/photo-1558487661-9d4f01e2ad64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
  ];

  function Arrow(props) {
    const arrowType =
      props.type === "next"
        ? [classes.arrow, classes.right].join(" ")
        : [classes.arrow, classes.left].join(" ");

    return (
      <div className={arrowType} onClick={props.onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <path d="M10.707 17.707L16.414 12 10.707 6.293 9.293 7.707 13.586 12 9.293 16.293z"></path>
        </svg>
      </div>
    );
  }

  const renderSlides = () =>
    data.map((current, index) => (
      <div key={index}>
        <div className={classes.card}>
          <div className={classes.cardLeft}>
            <p>{current.story}</p>
            <div className={classes.about}>
              <p>{current.name}</p>
              <p>{current.designation}</p>
            </div>
          </div>
          <div
            className={classes.cardRight}
            style={{
              background: `url(${current.img})`,
            }}
          ></div>
        </div>
      </div>
    ));

  return (
    <>
      <div className={classes.carousel}>
        <div className={classes.carouselMain}>
          <Slider
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
            dots={true}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
          >
            {renderSlides()}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Carousel;
