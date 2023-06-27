import React from "react"
// import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"


import { photos } from "./PhotoList"

import "./Photos.scss"

export default function Photos() {

  return (
    <>
      <div id="photosHeader">
        <h2>Photos</h2>
      </div>
      <div id="photosContent">
        Photos
      </div>
      <div id="photosCredit">
        <p>Photos by Brooke Elisabeth Photography</p>
      </div>
    </>
  )
}
