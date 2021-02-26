import React, { useEffect } from "react";

import * as classes from "./Home.module.css";
import Carousel from "../../Components/Carousel/Carousel";

import HeadImage from "../../Assets/head.png";
import Rating from "../../Assets/stars.svg";
import Aestheticon from "../../Assets/brands/Aestheticon.svg";
import Ascenur from "../../Assets/brands/ASCENUR.svg";
import Beatryx from "../../Assets/brands/Beatryx.svg";
import Ceovia from "../../Assets/brands/CEOVIA.svg";
import Eikonha from "../../Assets/brands/Eikonha.svg";
import Lapromed from "../../Assets/brands/Lapromed.svg";
import Prizmah from "../../Assets/brands/PRIZMAH.png";
import Relixin from "../../Assets/brands/RELIXIN.svg";
import Skinin from "../../Assets/brands/Skinin.svg";

export default function () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardsData = [
    {
      title: "Our Vision",
      desc:
        "To be the leader in the Pharmaceutical, Medical, Health, Aesthetic and Beauty sectors of Middle East and South East Asia in customer satisfaction, professionalism, quality products and services, through our team effort and working together as partners with our business alliances.",
    },
    {
      title: "Our Mission",
      desc:
        "To provide quality and innovative products to health care professionals in the Middle East and South East Asia.To attain a highest level of customer satisfaction through the quality of our product portfolio and services. To utilize the combined knowledge and experience of our advisory panel of Dermatologists, Plastic Surgeons and Skin Therapists to identify the changing needs of the health care and aesthetic medicine market.",
    },
    {
      title: "Our Value",
      desc:
        "AKI is committed to the highest ethical standards. Our products and services are of the highest quality. Our business practices and processes are designed to achieve quality results that exceed the expectations of patients, physicians, customers, business partners and regulators. Quality is ingrained in the work of our colleagues and all our values. We have a relentless passion for quality in everything we do.",
    },
  ];

  return (
    <>
      <div className={classes.head}>
        <div className={classes.background}></div>
        <div className={classes.head__main}>
          <div className={classes.discover}>
            <h1>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h1>
            <button>Discover More</button>
          </div>
          <div className={classes.image}>
            <img src={HeadImage} alt="head" />
          </div>
        </div>
      </div>
      <div className={classes.aboutUs}>
        <div className={classes.aboutUs__main}>
          <h2 className={classes.gradientHeading}>about us</h2>
          <p>
            AK International LLC (AKI) is the leading provider of
            pharmaceutical, aesthetic, skin care products, surgical, medical and
            beauty equipment in the Middle East and South East Asia.
            Incorporated in 2005 in Dubai, AKI is one of the fast growing
            companies in the Middle East.
          </p>
          <p>
            AKI takes great pride in selling, distributing and marketing,
            pharmaceuticals, pharmaceutical intermediates, medical and aesthetic
            products, professional skin care products and medical, surgical and
            beauty equipment of the highest quality to a wide range of health
            care professionals in the Middle East and South East Asia.
          </p>
          <div className={classes.aboutUs_cards}>
            {cardsData.map((data, index) => (
              <div key={index} className={classes.card}>
                <div className={classes.rating}>
                  <span></span>
                  <img src={Rating} alt="rating" />
                  <span></span>
                </div>
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classes.featuredBrands}>
        <div>
          <h2 className={classes.gradientHeading}>our featured brands</h2>
          <div>
            <div>
              <img src={Eikonha} alt="Eikonha" />
            </div>

            <div>
              <img src={Ascenur} alt="Ascenur" />
            </div>

            <div>
              <img src={Lapromed} alt="Lapromed" />
            </div>
            <div>
              <img src={Skinin} alt="Skinin" />
            </div>
            <div>
              <img src={Prizmah} alt="Prizmah" />
            </div>
            <div>
              <img src={Relixin} alt="Relixin" />
            </div>
            <div>
              <img src={Beatryx} alt="Beatryx" />
            </div>
            <div>
              <img src={Aestheticon} alt="Aestheticon" />
            </div>
            <div>
              <img src={Ceovia} alt="Ceovia" />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.stories}>
        <div>
          <h2 className={classes.gradientHeading}>our stories</h2>
          <div className={classes.carousel}>
            <div className={classes.box}></div>
            <Carousel />
          </div>
        </div>
      </div>
    </>
  );
}
