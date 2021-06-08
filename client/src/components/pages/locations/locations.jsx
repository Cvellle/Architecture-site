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
          <title>Rača residence | Lokacija</title>
        </Helmet>
        <Breadcrumb title={"Lokacija"} />

        <div className="section-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 content-left pl-md-3">
                <Heading className="col-lg-10" />
                <p className="col-lg-10 col-md-12 col-sm-12 text-black">
                  Stambeno-poslovni objekat Rača Residences se nalazi u ulici
                  Vojvode Pavla Cukića br 7.
                  <br /> <br />
                  Ovaj objekat predstavlja novo moderno jezgro u samom centru
                  grada.
                  <br /> <br />
                  Poslovno stambeni objekat se nalazi na 500m udaljenosti od
                  opštine Rača i 800m od Karađorđevog doma.
                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-1 d-flex2 locationWrapper">
                <img
                  className="mx-md-auto mx-lg-unset d-block img-fluid ml-auto"
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
                  className="mx-md-auto mx-lg-unset d-block img-fluid "
                  src="/assets/images/locations/lokacija_2.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                <Heading className="col-lg-10" />
                <p className="col-lg-11 col-md-12 col-sm-12 text-black">
                  Stambeno poslovna zgrada Rača Residences se sastoji od
                  poslovnog prostora i 42 stana u ulici Vojvode Pavla Cukića,
                  dok je parking prostor planiran u zadnjem delu dvorišta sa 22
                  parking mesta.
                  <br /> <br />
                  Objekat je spratnosti Su+Pr+4sp+Pk(Ps), u objektu su planirani
                  stanovi različitih struktura od garsonjera do četvorosobnih
                  stanova, površine od 27.44m2 do 104.20m2.
                  <br /> <br />U zgradi postoji putnički lift nosivosti 630kg
                  ili osam osoba. U prizemlju se nalazi ulaz za stanare zgrade
                  iz ulice Vojvode Pavla Cukića i poslovni prostor površine
                  111m2. <br /> <br /> Bruto površina objekata je 3685.89m2.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 content-left pl-md-3">
                <Heading className="col-lg-10 mb-2" />
                <p className="col-lg-11 col-md-12 col-sm-12 text-black">
                  - SPOLJNA STOLARIJA NA STANOVIMA JE OD PVC ŠESTOKOMORNIH
                  PROFILA BELE BOJE, SA DVOSLOJNIM NISKOEMISIONIM STAKLOM,
                  PUNJENIM ARGONOM, ROLETNA JE ALUMINIJUMSKA. <br />
                  <br />
                  - NA POSLOVNOM PROSTORU I ULAZNA VRATA U ZGRADU SU OD
                  ALUMINIJUMSKIH PROFILA U BOJI ANTRACIT.
                  <span className="d-block mt-3">
                    - Podovi u sobama stanova su od laminata modernog dezena
                    evropskog hrasta.
                  </span>
                  <span className="d-block mt-3">
                    - U kupatilama, kuhinjama i na terasama podovi su izrađeni
                    od italijanskih granitnih pločica.
                  </span>
                  <span className="d-block mt-3">
                    - Sanitarije i vodovodne instalacije u kupatilima su
                    izrađene od italijanskog i domaćeg programa.
                  </span>
                  <span className="d-block mt-3">
                    - Unutrašnja vrata su od farbanog medijapana sa izolacijom.
                  </span>
                  <span className="d-block mt-3">
                    - Ulazna vrata stanova su sigurnosna sa multi-point sistemom
                    zaključavanja.
                  </span>
                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="mx-md-auto mx-lg-unset d-block img-fluid"
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
                  className="mx-md-auto mx-lg-unset d-block img-fluid"
                  src="/assets/images/locations/lokacija_4.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                <Heading className="col-lg-10" />
                <p className="col-lg-10 col-md-12 col-sm-12 text-black">
                  Svaki od stanova poseduje sistem daljinskog grejanja.
                  <br /> <br />
                  Fasadni zidovi su termički izolovani od najsavremenijih
                  izolacionih ploča koji pružaju vrhunsku energetsku efikasnost
                  vašeg doma.
                  <br /> <br />
                  Fasada je završno obrađena kombinacijom drveta i dekorativnog
                  fasadnog maltera.
                  <br /> <br />
                  Krovni pokrivač je izrađen od crepa.
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
