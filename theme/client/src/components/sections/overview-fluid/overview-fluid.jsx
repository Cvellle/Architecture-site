import React, { Component } from "react";
import Heading from "../../common/heading/heading";

class OverviewFluidSection extends Component {
  render() {
    return (
      <div className="container-fluid px-md-4">
        <div className="row mx-lg-4">
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center">
            <div className="w-lg-75 mx-auto">
              <Heading>NOVO LICE PANČEVA</Heading>
              <p className="text-black mt-5">
                Smešten u srcu mirnog porodičnog naselja koje se razvija u novi,
                moderan deo grada, kompleks TRI NOVE spaja u harmoničnu celinu
                neuporediv osećaj topline i udobnosti i sve pogodnosti
                savremenog stanovanja.
              </p>
              <p className="mt-4">
                Sve što vam je važno je na dohvat ruke, a jedna od najvećih
                prednosti ove lokacije je njena izuzetna povezansot sa lokalnim
                okruženjem i najvažnijim sadržajima Zemuna i Novog Beograda.
                Nalazi se u blizini glavnih zemunskih ulica i odlično je
                povezana sa ostalim delovima grada mrežom javnog gradskog
                prevoza i autoputem E-75. Zato lako i brzo stižete od posla do
                stana i od stana do slobodnog vremena provedenog u prirodi,
                odmoru ili druženju sa prijateljima, koja nam se usled brzine
                tempa gradskog života ponekad zvuče kao nedostižan san.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 align-self-center text-center">
            <img
              className="img-fluid"
              src="/assets/images/gallery1/04.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default OverviewFluidSection;
