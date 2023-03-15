import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import '../css/ContactPageComponent.css';

export default class ContactPageComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <div className="container-fluid contact-container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h2 className="contact-heading">Contact Us</h2>
              <form>
                <div className="form-group">
                  <label htmlFor="nameInput">Name</label>
                  <input type="text" className="form-control" id="nameInput" placeholder="Enter your name" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="emailInput">Email address</label>
                  <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="messageInput">Message</label>
                  <textarea className="form-control" id="messageInput" rows="5" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
