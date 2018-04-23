import React, { Component } from "react"

class Form extends Component {
  render = () => {
    const { title, name, email, message, submit } = this.props
    return [
      <h3 key="title">{title}</h3>,
      <form
        key="form"
        id="form-contact"
        method="post"
        className="clearfix ts-form ts-form-email ts-inputs__transparent"
        data-php-path="assets/php/email.php"
      >
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <label htmlFor="form-contact-name">{name.title}</label>
              <input
                type="text"
                className="form-control"
                id="form-contact-name"
                name="name"
                placeholder={name.placeholder}
                required
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <label htmlFor="form-contact-email">{email.title}</label>
              <input
                type="email"
                className="form-control"
                id="form-contact-email"
                name="email"
                placeholder={email.placeholder}
                required
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="form-contact-message">{message.title}</label>
              <textarea
                className="form-control"
                id="form-contact-message"
                rows="5"
                name="message"
                placeholder={message.placeholder}
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group clearfix">
          <button
            type="submit"
            className="btn btn-primary float-right"
            id="form-contact-submit"
          >
            {submit}
          </button>
        </div>
        <div className="form-contact-status" />
      </form>,
    ]
  }
}

export default Form
