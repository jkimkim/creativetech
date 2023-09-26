import React, { Component } from "react";

class Carousel extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="carousel_1">
          <section id="section-1">
            <div className="content-slider">
              <input
                type="radio"
                id="banner1"
                className="sec-1-input"
                name="banner"
                checked
              />
              <input
                type="radio"
                id="banner2"
                className="sec-1-input"
                name="banner"
              />
              <input
                type="radio"
                id="banner3"
                className="sec-1-input"
                name="banner"
              />
              <input
                type="radio"
                id="banner4"
                className="sec-1-input"
                name="banner"
              />
              <div className="slider">
                <div id="top-banner-1" className="banner">
                  <div className="banner-inner-wrapper">
                    <h2>Hello!</h2>
                    <h1>
                      Welcome
                      <br />
                      to JKIMTECH{" "}
                    </h1>
                    <div className="line"></div>
                    <div className="learn-more-button">
                      <a href="#section-2">Learn More</a>
                    </div>
                  </div>
                </div>
                <div id="top-banner-2" className="banner">
                  <div className="banner-inner-wrapper">
                    <h2>What We Do</h2>
                    <h1>
                      here at
                      <br />
                      JKIMTECH
                    </h1>
                    <div className="line"></div>
                    <div className="learn-more-button">
                      <a href="#section-4">Learn More</a>
                    </div>
                  </div>
                </div>
                <div id="top-banner-3" className="banner">
                  <div className="banner-inner-wrapper">
                    <h2>Here We Are</h2>
                    <h1>
                      We Are
                      <br />
                      JKIMTECH
                    </h1>
                    <div className="line"></div>
                    <div className="learn-more-button">
                      <a href="#section-6">Learn More</a>
                    </div>
                  </div>
                </div>
                <div id="top-banner-4" className="banner">
                  <div className="banner-inner-wrapper">
                    <h2>Our Contacts</h2>
                    <h1>
                      Welcome
                      <br />
                      to JKimTech
                    </h1>
                    <div className="line"></div>
                    <div className="learn-more-button">
                      <a href="#main-footer">Learn More</a>
                    </div>
                  </div>
                </div>
              </div>
              <nav>
                <div className="controls">
                  <label for="banner1">
                    <span className="progressbar">
                      <span className="progressbar-fill"></span>
                    </span>
                    <span>01</span> Intro
                  </label>
                  <label for="banner2">
                    <span className="progressbar">
                      <span className="progressbar-fill"></span>
                    </span>
                    <span>02</span> Work
                  </label>
                  <label for="banner3">
                    <span className="progressbar">
                      <span className="progressbar-fill"></span>
                    </span>
                    <span>03</span> About
                  </label>
                  <label for="banner4">
                    <span className="progressbar">
                      <span className="progressbar-fill"></span>
                    </span>
                    <span>04</span> Contacts
                  </label>
                </div>
              </nav>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Carousel;
