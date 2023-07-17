import React from 'react';
import ReactDOM from 'react-dom';
// import ReactGA from 'react-ga'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './index.scss';


// const trackingId = "G-M6CY7G07XG"
// ReactGA.initialize(trackingId)
// ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <React.StrictMode>
      <Header />
      {/* <div className="sticky">
        <a href="https://jimmyandlaura.anrsvp.com/" target="_blank" rel="noreferrer">RSVP</a>
      </div> */}
      <div id="content">
        <Home />
      </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);