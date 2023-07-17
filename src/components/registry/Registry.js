import React from "react";

import './Registry.scss'
import mr from "../../images/myRegistry.jpg"
// import macys from "../../images/macys.jpg"
// import zola from "../../images/zola.jpg"

export default function Registry() {
  return (
    <div id="holder">
      <h2> Gift Registries </h2>

      <div id="images">
        <a href="https://www.myregistry.com/giftlist/jimmyandlaura" target="_blank" rel="noreferrer"><img src={mr} alt="crate&barrel" /></a>
      </div>
    </div>
  )
}
