import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.scss";
class SliderHome extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className={"slider-wrap position-relative"}>
        <Slider {...settings}>
          <div className="slider-item position-relative">
            <div
              className="slider-image"
              style={{
                backgroundImage: "url(/assets/imagewebp/theme/slide1.jpg)"
              }}
            />
            <div className="container">
              <div className="slider-content">
                <div className="text-center w-100">
                  <h2 className="text-white">
                    Novi pogled na <br />vaš život{" "}
                  </h2>
                  <h5 className="text-white mt-5">
                    Oaza kreirana za vas<br />
                  </h5>
                </div>
                <div className="slider-footer text-left">
                  <h6 className="text-white">Pozovite nas i zakažite</h6>
                  <p className="text-white">Ponedeljak - petak: 10h - 17h</p>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-item position-relative">
            <div
              className="slider-image"
              style={{
                backgroundImage: "url(/assets/imagewebp/theme/slide2.jpg)"
              }}
            />
            <div className="container">
              <div className="slider-content">
                <div className="text-center w-100">
                  <h2 className="text-white">
                    Novi pogled na <br />vaš život{" "}
                  </h2>
                  <h5 className="text-white mt-5">
                    Oaza kreirana za vas<br />
                  </h5>
                </div>
                <div className="slider-footer text-left">
                  <h6 className="text-white">Pozovite nas i zakažite</h6>
                  <p className="text-white">Ponedeljak - petak: 10h - 17h</p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default SliderHome;
