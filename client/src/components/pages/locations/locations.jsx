import React, { Component } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from "react-helmet";
import { Parallax } from "react-parallax";
import Heading from "../../common/heading/heading";
import "./locations.scss";
import OurTeamBlock from "../../common/our-team/our-team";
import CallToActionSection from "../../sections/caltoaction/caltoaction";
import OurTeamSection from "../../sections/our-team/our-team";

class Locations extends Component {
  render() {
    return (
      <div className="about-page-wrap locations">
        <Helmet>
          <title>Rača residence | Lokacije</title>
        </Helmet>
        <Breadcrumb title={"Lokacije"} />

        <div className="section-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 content-left pl-md-3">
                <Heading className="col-lg-10" />
                <p className="col-lg-10 col-md-12 col-sm-12 text-black">
                  Stambeno-poslovni objekat Rača Residences se nalazi u samom
                  centru Rače na samo 500 m od opstine i 800 m od Karadjordjevog
                  doma.
                  <br /> <br />
                  Objekat cini stambeno-poslovna zgrada sa 1 poslovnim prostorom
                  i 42 stana u ul. Vojvode Pavla Cukića, dok je parking prostor
                  planiran u zadnjem delu dvorišta sa ukupno 22 parking mesta od
                  kojih su dva parking mesta za invalide.
                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-1 d-flex2">
                <img
                  className="shadow img-fluid ml-auto"
                  src="/assets/images/locations/lokacija_1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="shadow img-fluid "
                  src="/assets/images/locations/lokacija_2.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                <Heading className="col-lg-10" />
                <p className="col-lg-10 col-md-12 col-sm-12 text-black">
                  Objekat je spratnosti Po+Pr+4sp+Pk(Ps). Objekat je planiran sa
                  stanovima različitih struktura od garsonjera do četvorosobnih
                  stanova i različitih površina od 27,44m² do 107,20m².
                  <br /> <br />
                  U objektu je planiran stan prilagođen osobama sa posebnim
                  potrebama. U zgradi postoji dva putnička lifta.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 content-left pl-md-3">
                <Heading className="col-lg-10" />
                <p className="col-lg-10 col-md-12 col-sm-12 text-black">
                  U prizemlju se nalazi ulaz za stanare zgrade iz ulice Vojvode
                  Pavla Cukića i poslovni prostor površine oko 111m2. Ukupna
                  bruto površina objekta je 3685,89m2.
                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="shadow img-fluid"
                  src="/assets/images/locations/lokacija_3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="shadow img-fluid"
                  src="/assets/images/locations/lokacija_4.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                <Heading className="col-lg-10" />
                <p className="col-lg-10 col-md-12 col-sm-12 text-black">
                  Podovi u sobama stanova su od laminata u tonu hrasta, u
                  kupatilima, kuhinjama i na terasama podovi su od granitnih
                  pločica. Unutrašnja vrata su od farbanog medijapana. Ulazna
                  vrata stanova su sigurnosna. Spoljna stolarija je od vrhunskih
                  PVC profila. Fasadni zidovi objekta su termički izolovani od
                  izolacionih ploča debljine 10cm. Fasada je završno obrađena
                  kombinacijom drveta, dekorativnog fasadnog maltera. Krovni
                  pokrivač je crep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Locations;
