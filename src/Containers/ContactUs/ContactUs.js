import React from "react";
import { useForm } from "react-hook-form";

import * as classes from "./ContactUs.module.css";

import NavPlaceholder from "../../Components/NavPlaceholder/NavPlaceholder";
import RouteBar from "../../Components/RouteBar/RouteBar";

import Location from "../../Assets/icons/location.svg";
import Info from "../../Assets/icons/info.svg";
import mail from "../../Assets/icons/mail.svg";
import headset from "../../Assets/icons/headset.svg";

export default function () {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <NavPlaceholder />
      <RouteBar title="Contact Us" routeArr={["Home", "Contact Us"]} />
      <div className={classes.contactDetails}>
        <div>
          <img src={Location} alt="location" />
          <p>ak international</p>
          <p>Address Line, Address l ine, Address Line</p>
        </div>
        <div>
          <img src={headset} alt="headset" />
          <p>let's talk</p>
          <p>
            Phone: 1-800-111-222
            <br />
            Fax: 1-8000-111-222
          </p>
        </div>
        <div>
          <img src={mail} alt="mail" />
          <p>e-mail us</p>
          <p>
            info@akinternational.com
            <br />
            support@akinternational.com
          </p>
        </div>
        <div>
          <img src={Info} alt="info" />
          <p>customer services</p>
          <p>Lorem ipsum Lorem ipsum dummy text</p>
        </div>
      </div>
      <div className={classes.contactUs}>
        <div className={classes.background}></div>
        <div className={classes.form}>
          <p>Fill out the form and we'll be in touch soon!</p>
          <p>How can we help you?</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  ref={register({ required: true })}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  ref={register({ required: true })}
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Your Contact"
                  ref={register({ required: true })}
                />
              </div>
              <textarea
                type="text"
                name="message"
                placeholder="Your Message"
                ref={register({ required: true })}
              />
            </div>
            <div className={classes.agreePolicies}>
              <input
                name="agreePolicy"
                type="checkbox"
                ref={register({ required: true })}
              />
              <p>
                I accept the terms & conditions and I understand that my data
                will be hold securely in accordance with the{" "}
                <a href="#">Privacy Policy.</a>
              </p>
            </div>
            <input type="submit" value="send message" />
          </form>
        </div>
        <p>
          We like to talk and on the strength of that you are invited for a
          coffee.
        </p>
      </div>
    </>
  );
}
