import React, { Component } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from "react-helmet";
import { Parallax } from "react-parallax";
import Heading from "../../common/heading/heading";
import "./about.scss";
import OurTeamBlock from "../../common/our-team/our-team";
import CallToActionSection from "../../sections/caltoaction/caltoaction";
import OurTeamSection from "../../sections/our-team/our-team";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-page-wrap">
        <Helmet>
          <title>Gening | O nama</title>
        </Helmet>
        <Breadcrumb title={"O nama"} />

        <div className="section-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 content-left pl-md-3">
                <Heading>O NAMA</Heading>
                <p className="text-black">
                  Kupovina stana nije samo investicija u budućnost, već i
                  investicija u stvaranje doma kao simbola sigurnosti. Zato je
                  važno imati poverenje u investitora, čija će Vas stručnost i
                  reputacija učiniti bezbrižnim.
                </p>
                <p>
                  Pristup svakom projektu karakterišu tri specifičnosti - visok
                  kvalitet, konkurentna cena i poštovanje rokova. Na ovaj način
                  težimo da očuvamo svoju reputaciju posvećenih i stručnih
                  profesionalaca.
                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="img-fluid"
                  src="/assets/images/about/family_1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="section-wrapper">
          <Parallax
            className={`section-parallax`}
            bgImage={`/assets/images/about/family_4.jpg`}
            bgImageAlt="the cat"
            strength={500}
          >
            <div className="about-parallax  position-relative">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="box-counter text-center text-white">
                      <div className="box-counter-wrap">
                        <div className="counter-nummer">KVALITET</div>
                        <div className="counter-text">
                          NA NAJVIŠEM NIVOU, KOJI ISPUNJAVA SVA VAŠA OČEKIVANJA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="box-counter text-center text-white">
                      <div className="box-counter-wrap">
                        <div className="counter-nummer">ISTRAJNOST</div>
                        <div className="counter-text">
                          DOSLEDNOST VAŠEG TRUDA
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <div className="box-counter text-center text-white">
                      <div className="box-counter-wrap">
                        <div className="counter-nummer">DIZAJN</div>
                        <div className="counter-text">
                          PRILAGOĐEN SVIM VAŠIM POTREBAMA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
        <div className="section-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="img-fluid"
                  src="/assets/images/about/family_2.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                <Heading>VAŠA PRIČA</Heading>
                <p>
                  Trudimo se da našim zaposlenima obezbedimo bezbedno radno
                  okruženje. Verujemo da se nezgode mogu preduprediti i
                  sprečiti. Stoga, kompanija zapošljava obučene radnike sa
                  iskustvom i sprovodi rigorozne mere zaštite na radu. Potpuno
                  okrenuti Vašem zadovoljstvu, pružamo Vam mogućnosti da
                  izaberete stan po svojoj meri i u potpunosti ga prilagodite
                  svojim željama.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-wrapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 content-left pl-md-3">
                <Heading>VAŠE VREDNOSTI</Heading>
                <p className="text-black">In-House Dizajn</p>
                <p>
                  Okrenuti klijentima, stalno traganje za inovacijama u
                  funkcionalnosti stanova, tražeći da kupcima obezbedi životni
                  prostor koji to stvarno jeste. Izbor lokacija i inovativna
                  rešenja čine da Vaša investicija vremenom dobija na vrednosti.
                </p>
                <p className="text-black">Sigurnost</p>
                <p>
                  Nekretnine su fizička imovina koja ima potencijal da stvara
                  prihod i profit u dužem vremenskom periodu i retko kad
                  ostvaruju negativan prihod. One su prostor neophodan za
                  egzistenciju. U nekretninama se krije najveće nacionalno
                  blago.
                </p>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <img
                  className="img-fluid"
                  src="/assets/images/about/family_3.jpg"
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
                  className="img-fluid"
                  src="/assets/images/about/family_4.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-right">
                <Heading>VIZIJA</Heading>
                <p>
                  Svojom ponudom proizvoda i usluga za svakodnevnu upotrebu
                  stvoriti najbolje uslove za potrošače. Uz stručne i motivisane
                  radnike pružiti najbolju uslugu i prijatnu kupovinu
                  potrošačima u ugodnom okruženju.
                </p>
                <p>Rastom i dobrim poslovanjem osigurati dobit za kompaniju.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
