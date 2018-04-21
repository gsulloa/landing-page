import React, { Component } from "react"

class Form extends Component {
  render = () => {
    return ([
      <h3 key="title">Contact Form</h3>,
      <form key="form" id="form-contact" method="post" className="clearfix ts-form ts-form-email ts-inputs__transparent" data-php-path="assets/php/email.php">
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <label htmlFor="form-contact-name">Your Name *</label>
              <input type="text" className="form-control" id="form-contact-name" name="name" placeholder="Your Name" required/>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="form-group">
              <label htmlFor="form-contact-email">Your Email *</label>
              <input type="email" className="form-control" id="form-contact-email" name="email" placeholder="Your Email" required/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="form-contact-message">Your Message *</label>
              <textarea className="form-control" id="form-contact-message" rows="5" name="message" placeholder="Your Message" required></textarea>
            </div>
          </div>
        </div>
        <div className="form-group clearfix">
          <button type="submit" className="btn btn-primary float-right" id="form-contact-submit">Send a Message</button>
        </div>
        <div className="form-contact-status"></div>
      </form>
    ])
  }
}

export default Form