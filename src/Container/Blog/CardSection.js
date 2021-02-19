import React from 'react';
import CustomCard from './Card'
import style from './Blog.module.css'

function CardSection(props) {
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
        <div className={style.blog_cardSection}>
            {cardsData.map((data)=><CustomCard/>)
            }
        </div>
    );
}

export default CardSection;