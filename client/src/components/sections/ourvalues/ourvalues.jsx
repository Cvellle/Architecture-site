import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./ourvalues.scss";
import Heading from "../../common/heading/heading";
import Slider from "react-slick";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Modal from "react-responsive-modal";
import ContactForm from "../../common/contact-form/contact-form";
import { urlencoded } from "body-parser";

class ApartmentsPlansSection extends Component {
  state = {
    open: false,
    isLoading: true,
    toFilter: 0
  };
  data = [];

  constructor(props) {
    super(props);
    this.load();
  }

  onCloseModal = () => {
    this.setState({ open: false });
  };

  load = () => {
    fetch("/api/our-values.json")
      .then(response => response.json())
      .then(res => {
        this.data = res;
        this.setState({ isLoading: false });
      });
  };

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let filtered = this.props.items.filter(
      el => el.roomsNumber === this.state.toFilter
    );

    return (
      <div className="container">
        <Heading>PLANOVI STANOVA</Heading>
        <div className={`tabs-wrap`}>
          {!this.state.isLoading &&
            <Tabs>
              <TabList>
                {this.data.map((data, index) =>
                  <Tab
                    key={index}
                    onClick={() => this.setState({ toFilter: index })}
                  >
                    {data.title}
                  </Tab>
                )}
              </TabList>
              <h5>
                {"Broj stanova: " + filtered.length}
              </h5>
              {this.data.map((data, index) =>
                <TabPanel key={index}>
                  <Slider {...settings} className="roomsSlider p-5 shadow">
                    {filtered.map((element, i) =>
                      <div className="slider-item position-relative roomsSlider">
                        <h5 className="pl-lg-5">
                          {i + 1}
                        </h5>
                        <div className="row">
                          <div className="col-md-6 pl-lg-5">
                            <p>
                              {element.description}
                            </p>
                            <ul className="apartment-items">
                              <li className="apartment-list-item">
                                <span className="title-list text-uppercase">
                                  sprat
                                </span>
                                <span className="value-list">
                                  {element.level == 0
                                    ? "prizemlje"
                                    : element.level}
                                </span>
                              </li>
                              <li className="apartment-list-item">
                                <span className="title-list text-uppercase">
                                  broj soba
                                </span>
                                <span className="value-list">
                                  {element.roomsNumber == 0
                                    ? "garsonjera"
                                    : element.roomsNumber}
                                </span>
                              </li>
                              <li className="apartment-list-item">
                                <span className="title-list text-uppercase">
                                  kvadratura
                                </span>
                                <span className="value-list">
                                  {(Number(element.netoPovrsina.zatvorena) +
                                    Number(
                                      element.netoPovrsina.otvorena
                                    )).toFixed(2)}{" "}
                                  m<sup>2</sup>
                                </span>
                              </li>
                              <li className="apartment-list-item">
                                <span className="title-list text-uppercase">
                                  parking
                                </span>
                                <span className="value-list">da</span>
                              </li>
                            </ul>
                            <div className="apartment_button">
                              <button
                                onClick={() => this.setState({ open: true })}
                                className="btn btn-outline-primary w-100"
                              >
                                Zakaži termin
                              </button>
                            </div>
                          </div>

                          <div className="col-md-6 imgWrapper">
                            {/* <img
                                className="img-fluid"
                                src={element.gallery[0]}
                                alt={element.title}
                              /> */}
                            <Link to={`/stan/${element.id}`}>
                              <div
                                className="slider-image"
                                style={{
                                  backgroundImage:
                                    "url(" + element.gallery[0] + ")"
                                }}
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </Slider>
                </TabPanel>
              )}
            </Tabs>}
        </div>
        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content quick-view-modal">
              <div className="modal-body">
                <h6 className="heading-title">Zakaži termin</h6>
                <ContactForm />
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.apartments.apartments
  };
};

export default connect(mapStateToProps)(ApartmentsPlansSection);
