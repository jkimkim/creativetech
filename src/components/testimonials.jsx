import React from "react";

class Testimonials extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="customer">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="titlepage">
                  <h2>
                    what is say <strong class="pink"> Customer </strong>
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
            <div class="row">
              <div class="col-md-12">
                <div
                  id="myCarousel"
                  class="carousel slide customer_Carousel "
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="container">
                        <div class="carousel-caption ">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="test_box">
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
                                <div class="customar_box">
                                  <div class="veni">
                                    <i>
                                      <img src="images/costomar.png" alt="#" />
                                    </i>
                                    <h4> veniam, quis </h4>
                                  </div>
                                  <i class="padd_rightt0">
                                    <img src="images/cost.png" alt="#" />
                                  </i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="container">
                        <div class="carousel-caption">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="test_box">
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
                                <div class="customar_box">
                                  <div class="veni">
                                    <i>
                                      <img src="images/costomar.png" alt="#" />
                                    </i>
                                    <h4> veniam, quis </h4>
                                  </div>
                                  <i class="padd_rightt0">
                                    <img src="images/cost.png" alt="#" />
                                  </i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="container">
                        <div class="carousel-caption">
                          <div class="row">
                            <div class="col-md-12">
                              <div class="test_box">
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
                                <div class="customar_box">
                                  <div class="veni">
                                    <i>
                                      <img src="images/costomar.png" alt="#" />
                                    </i>
                                    <h4> veniam, quis </h4>
                                  </div>
                                  <i class="padd_rightt0">
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
                    class="carousel-control-prev"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
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
