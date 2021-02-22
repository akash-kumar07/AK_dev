import React from "react";
import * as classes from "./ContactUs.module.css";

import NavPlaceholder from "../../Components/NavPlaceholder/NavPlaceholder";
import RouteBar from "../../Components/RouteBar/RouteBar";

import Location from "../../Assets/icons/location.svg";
import Info from "../../Assets/icons/info.svg";
import mail from "../../Assets/icons/mail.svg";
import headset from "../../Assets/icons/headset.svg";

export default function () {
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
    </>
  );
}
