import React from "react";

import Registry from '../registry/Registry'
import Faqs from '../faqs/FAQS'

import "./Home.scss"

import topimage from "../../images/coverPhoto.jpg"

export default function Home() {
  return (
    <>
      <div className="homeImage">
        <h1>We're Getting Married!</h1>
      </div>
      <img src={topimage} alt="rob and ellen" id="mobileImage" />
      <div className="homeContent">
        <div id="homeNames">
          <p id="ellen">Laura Irvine</p>
          <p id="and">and</p>
          <p id="rob">Jimmy Donadio</p>
        </div>
        <div id="mobileNames">
          <p> Laura Irvine and Jimmy Donadio </p>
        </div>
        <div id="dateCity">
          <div id="date">
            October 7, 2023
          </div>
          <div id="city">
            Camp Fire Minnesota<br />
            Excelsior, MN
          </div>
          <a href="https://jimmyandlaura.anrsvp.com/" target="_blank" rel="noreferrer"><button class="button">RSVP</button></a>
        </div>
        <Registry />
        <Faqs />
      </div>
      <div id="homeBottomImage" />
    </>
  )
}
