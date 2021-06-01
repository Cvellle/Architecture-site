import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import Textarea from "react-validation/build/textarea";
import { isEmail, isEmpty, isMobilePhone } from "validator";
import "./contact-form.scss";
import axios from "axios";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      message: "",
      address: "",
      sentText: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      messages: this.state.message,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
    };

    axios
    .create({baseURL: 'http://api.racaresidences.rs/'})
      .post('api/send-mail', dataToSubmit)
      .then(this.setState({ sentText: "Vaša poruka je uspešno poslata!" }));
  };

  required = (value) => {
    if (isEmpty(value)) {
      return (
        <small className="form-text text-danger">This field is required</small>
      );
    }
  };

  email = (value) => {
    if (!isEmail(value)) {
      return (
        <small className="form-text text-danger">Invalid email format</small>
      );
    }
  };

  phone = (value) => {
    if (!isMobilePhone(value)) {
      return (
        <small className="form-text text-danger">
          Invalid Phone number format
        </small>
      );
    }
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.form.validateAll();

    const dataToSubmit = {
      messages: this.state.message,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
    };

    axios
    .create({baseURL: 'http://api.racaresidences.rs/'})
      .post('api/send-mail', dataToSubmit)
      .then(this.setState({ sentText: "Vaša poruka je uspešno poslata!" }));

    if (this.checkBtn.context._errors.length === 0) {
      this.setState({ sentText: "Vaša poruka je uspešno poslata!" });
    }
  };

  render() {
    return (
      <Form
        className="form-group-v1"
        onSubmit={(e) => this.onSubmit(e)}
        ref={(c) => {
          this.form = c;
        }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="form-group">
              <Input
                name="name"
                onChange={(e) => {
                  this.setState({ name: e.target.value });
                }}
                value={this.state.name}
                type="text"
                placeholder="Vaše ime *"
                className="form-control"
                validations={[this.required]}
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="form-group">
              <Input
                name="phone"
                onChange={(e) => {
                  this.setState({ phone: e.target.value });
                }}
                value={this.state.phone}
                type="text"
                placeholder="Vaš telefon *"
                className="form-control"
                validations={[this.required, this.phone]}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <Input
            name="email"
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
            value={this.state.email}
            type="email"
            placeholder="Vaš e-mail *"
            className="form-control"
            validations={[this.required, this.email]}
          />
        </div>

        <div className="form-group">
          <Input
            name="address"
            onChange={(e) => {
              this.setState({ address: e.target.value });
            }}
            value={this.state.address}
            type="text"
            placeholder="Vaša adresa *"
            className="form-control"
            validations={[this.required]}
          />
        </div>

        <div className="form-group">
          <Textarea
            onChange={(e) => {
              this.setState({ message: e.target.value });
            }}
            value={this.state.message}
            className="form-control"
            placeholder="Kako možemo da vam pomognemo ?"
            rows="3"
            validations={[this.required]}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4 btn-block">
          Pošalji poruku
        </button>
        <CheckButton
          style={{ display: "none" }}
          ref={(c) => {
            this.checkBtn = c;
          }}
        />
        {this.state.sentText}
      </Form>
    );
  }
}

export default ContactForm;
