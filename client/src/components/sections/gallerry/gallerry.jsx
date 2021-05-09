import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Heading from "../../common/heading/heading";
import "./galerry.scss";

class GallerrySection extends Component {
  constructor(props) {
    super(props);
    this.load();
  }

  state = {
    isOpen: false,
    isLoading: true,
  };

  data = [];

  load = () => {
    fetch("/api/gallery.json")
      .then((response) => response.json())
      .then((res) => {
        this.data = res;
        this.setState({ isLoading: false });
      });
  };

  open(e, image) {
    e.preventDefault();
    this.image = image;
    this.setState({ isOpen: true });
  }

  render() {
    const { flexRow } = this.props;
    return (
      <>
        <Heading>Galerija slika</Heading>
        <div className="gallery gallerry-wrap p-0">
          <div
            className={`row${this.props.flexRow ? " flex-row-reverse" : ""}`}
          >
            {this.data.map((el, index) => (
              <div className="col-lg-3 col-md-6 col-md-12 m-0 p-0">
                <div className="gallerry-image m-0 p-0 imgWrapper">
                  <a href="#" onClick={(e) => this.open(e, el.image)}>
                    <img className="img-fluid" src={el.image} alt="" />
                    <div className="gallery-item-overlay">
                      <i className="opal-icon-zoom"></i>
                    </div>
                  </a>
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
        {this.state.isOpen && (
          <Lightbox
            onCloseRequest={() => this.setState({ isOpen: false })}
            mainSrc={this.image}
          />
        )}
      </>
    );
  }
}

export default GallerrySection;

//images removed: 13, 15, 17
