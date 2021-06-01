import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.scss";

class CarouselPage2 extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        image: `/assets/images/slider2/indexGallery1.jpg`,
        title: `Novo moderno jezgro u samom centru grada`,
        description:
          "Naša definicija dizajna teži tome da konstantno napreduje daljem razvijanju iskustva i ugođaja naših klijenata na našem prostoru.",
        link: "#"
      },
      {
        image: `/assets/images/slider2/indexGallery2.jpg`,
        title: `Novo moderno jezgro u samom centru grada`,
        description:
          "Naša definicija dizajna teži tome da konstantno napreduje daljem razvijanju iskustva i ugođaja naših klijenata na našem prostoru.",
        link: "#"
      },
      {
        image: `/assets/images/slider2/indexGallery3.jpg`,
        title: `Novo moderno jezgro u samom centru grada`,
        description:
          "Naša definicija dizajna teži tome da konstantno napreduje daljem razvijanju iskustva i ugođaja naših klijenata na našem prostoru.",
        link: "#"
      },
      {
        image: `/assets/images/slider2/indexGallery4.jpg`,
        title: `Novo moderno jezgro u samom centru grada`,
        description:
          "Naša definicija dizajna teži tome da konstantno napreduje daljem razvijanju iskustva i ugođaja naših klijenata na našem prostoru.",
        link: "#"
      }
    ];
    this.state = {
      active: this.data[0],
      slideIndex: 0
    };
  }

  slideChange = (old, index) => {
    this.setState({
      active: this.data[index],
      slideIndex: index
    });
  };

  checkActive(index) {
    let className = `bullet-item`;
    if (index === this.state.slideIndex) {
      className += ` selected`;
    }
    return className;
  }

  clickDot = index => {
    this.slider.slickGoTo(index);
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className={"carousel2-wrap position-relative"}>
        <div className="row flex-md-row-reverse m-0 p-0">
          <div className="col-lg-6 col-md-12 m-0 p-0">
            <Slider
              {...settings}
              ref={slider => (this.slider = slider)}
              beforeChange={this.slideChange}
            >
              {this.data.map((data, index) =>
                <div className="slider-item" key={index}>
                  <img src={data.image} alt="" className="img-fluid" />
                </div>
              )}
            </Slider>
          </div>
          <div className="col-lg-4 col-md-10  d-flex align-items-center">
            <div className="slider-content">
              <div className="slider-info">
                <h3 className="text-white text-uppercase mb-4">
                  {this.state.active.title}
                </h3>
                <p className="slider-desc">
                  {this.state.active.description}
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 d-flex align-items-center ">
            <div className="navigation">
              <ul className="bullets-vertical">
                {this.data.map((item, index) =>
                  <li
                    className={this.checkActive(index)}
                    key={index}
                    onClick={() => this.clickDot(index)}
                  >
                    <span className="bullet-inner" />
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselPage2;
