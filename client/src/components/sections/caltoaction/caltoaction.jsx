import React, { Component } from "react";
import "./caltoaction.scss";

class CallToActionSection extends Component {
  render() {
    return (
      <div className="call-to-action text-center">
        <div className="container">
          <h2 className="text-uppercase text-white">
            U pretprodaji od 1.6.2021.
          </h2>
          <h1 className="text-uppercase text-white mb-4">
            Useljiv u Avgustu 2022.
          </h1>
          <div className="btn-call-to-action">
            <a href="tel:066/390939" className="btn btn-dark" role="button">
              Pozovite nas
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CallToActionSection;
