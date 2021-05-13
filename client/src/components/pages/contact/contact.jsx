import React, { Component, setState } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import Helmet from "react-helmet";
import "./contact.scss";
import axios from "axios";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      sentText: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      message: this.state.message,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
    };

    axios
      .post(`/api/sendEmail`, dataToSubmit)
      .then(this.setState({ sentText: "Vaša poruka je uspešno poslata!" }));
  };

  changeString = (e) => {
    this.setState({
      [e.target.dataset.kind]: e.target.value,
    });
  };

  render() {
    return (
      <div className={`contact-page-wrap`}>
        <Helmet>
          <title>Gening | Kontakt</title>
        </Helmet>
        <Breadcrumb title={"Kontakt"} />
        <div className="section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="box-icon">
                  <div className="icon">
                    <i className="opal-icon-phone" />
                  </div>
                  <div className="content">
                    <span className="title text-uppercase">TELEFON :</span>
                    <p className="description">011/123123</p>
                    <p className="description">063/123123</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="box-icon">
                  <div className="icon">
                    <i className="opal-icon-point" />
                  </div>
                  <div className="content">
                    <span className="title text-uppercase">ADRESA :</span>
                    <p className="description">Industriska zona, Zmič bb</p>
                    <p className="description">35250, Paraćin</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4">
                <div className="box-icon no-border">
                  <div className="icon">
                    <i className="opal-icon-envelope" />
                  </div>
                  <div className="content">
                    <span className="title text-uppercase">E-MAIL :</span>
                    <p className="description">gening.pn@gmail.com</p>
                    {/* <p className="description">info@gening.com</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-wrapper">
          <form className="form-contact mb-5">
            <h3 className="text-uppercase text-center">KONTAKTIRAJTE NAS !</h3>
            <div className="mt-4 row">
              <div className="col-12 mb-3">
                <textarea
                  id="textareaComment"
                  className="form-control"
                  placeholder="Vaša poruka"
                  rows="3"
                  onChange={this.changeString}
                  data-kind="message"
                />
              </div>
              <div className="col-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Vaše ime"
                  onChange={this.changeString}
                  data-kind="name"
                />
              </div>
              <div className="col-6 mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Vaš Email"
                  onChange={this.changeString}
                  data-kind="email"
                />
              </div>
              <div className="col-6 mb-3">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  className="form-control"
                  id="exampleInputName"
                  placeholder="Vaš telefon"
                  onChange={this.changeString}
                  data-kind="phone"
                />
              </div>
              <div className="col-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Vaša adresa"
                  onChange={this.changeString}
                  data-kind="address"
                />
              </div>
              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={this.handleSubmit}
                  disabled={
                    this.state.message == "" || this.state.message == " "
                  }
                >
                  Pošaljite poruku <i className="opal-icon-arrow" />
                </button>
              </div>
              <p className="col-12 mt-3 text-center">{this.state.sentText}</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactPage;
