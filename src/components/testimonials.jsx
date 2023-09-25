import React from "react";

class Testimonials extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="customer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>
                    what is say <strong className="pink"> Customer </strong>
                  </h2>
                  <span>
                    {" "}
                    nostrud exercitation ullamco laboris nisi ut aliquip e ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  id="myCarousel"
                  className="carousel slide customer_Carousel "
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="carousel-caption ">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="test_box">
                                <p>
                                  ipsum dolor sit amet, consectetur adipiscing
                                  elit, sed do eiusmod tempor incididunt ut
                                  labore et dolore magna aliqua. Ut enim ad
                                  minim veniam, quis nostrud exercitation
                                  ullamco laboris nisi ut aliquip ex ea commodo
                                  consequat. Duis aute irure dolor in
                                  reprehenderit in voluptate velit ipsum dolor
                                  sit amet, consectetur adipiscing elit, sed do
                                  eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud exercitation ullamco laboris nisi ut
                                  aliquip e ea commodo consequat. Duis aute
                                  irure dolor in reprehenderit in voluptate
                                  velit{" "}
                                </p>
                                <div className="customar_box">
                                  <div className="veni">
                                    <i>
                                      <img src="images/costomar.png" alt="#" />
                                    </i>
                                    <h4> veniam, quis </h4>
                                  </div>
                                  <i className="padd_rightt0">
                                    <img src="images/cost.png" alt="#" />
                                  </i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="test_box">
                                <p>
                                  ipsum dolor sit amet, consectetur adipiscing
                                  elit, sed do eiusmod tempor incididunt ut
                                  labore et dolore magna aliqua. Ut enim ad
                                  minim veniam, quis nostrud exercitation
                                  ullamco laboris nisi ut aliquip ex ea commodo
                                  consequat. Duis aute irure dolor in
                                  reprehenderit in voluptate velit ipsum dolor
                                  sit amet, consectetur adipiscing elit, sed do
                                  eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud exercitation ullamco laboris nisi ut
                                  aliquip e ea commodo consequat. Duis aute
                                  irure dolor in reprehenderit in voluptate
                                  velit{" "}
                                </p>
                                <div className="customar_box">
                                  <div className="veni">
                                    <i>
                                      <img src="images/costomar.png" alt="#" />
                                    </i>
                                    <h4> veniam, quis </h4>
                                  </div>
                                  <i className="padd_rightt0">
                                    <img src="images/cost.png" alt="#" />
                                  </i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="test_box">
                                <p>
                                  ipsum dolor sit amet, consectetur adipiscing
                                  elit, sed do eiusmod tempor incididunt ut
                                  labore et dolore magna aliqua. Ut enim ad
                                  minim veniam, quis nostrud exercitation
                                  ullamco laboris nisi ut aliquip ex ea commodo
                                  consequat. Duis aute irure dolor in
                                  reprehenderit in voluptate velit ipsum dolor
                                  sit amet, consectetur adipiscing elit, sed do
                                  eiusmod tempor incididunt ut labore et dolore
                                  magna aliqua. Ut enim ad minim veniam, quis
                                  nostrud exercitation ullamco laboris nisi ut
                                  aliquip e ea commodo consequat. Duis aute
                                  irure dolor in reprehenderit in voluptate
                                  velit{" "}
                                </p>
                                <div className="customar_box">
                                  <div className="veni">
                                    <i>
                                      <img src="images/costomar.png" alt="#" />
                                    </i>
                                    <h4> veniam, quis </h4>
                                  </div>
                                  <i className="padd_rightt0">
                                    <img src="images/cost.png" alt="#" />
                                  </i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Testimonials;
