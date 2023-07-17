import React from "react";

import './faqs.scss'

export default function Faqs() {
  return (
    <div id="holder">
      <h2> Q & A </h2>
      {/* <h3 className="question">What should I wear?</h3>
      <p className="answer">The dress code for our wedding is something</p> */}
      <h3 className="question">Are there weather considerations?</h3>
      <p className="answer">The ceremony will be taking place outside weather permitting. In case of inclement weather, it can be moved inside.</p>
      <h3 className="question">If I have additional questions, how can I contact you? </h3>
      <p className="answer">You can email us at contact@jimmyandlaura.com</p>
    </div>
  )
}
