import React, { Component } from 'react';
import '../css/LandingPageComponent.css';
import HeaderComponent from './HeaderComponent';

export default class AboutPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageClicked: true
    };
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick() {
    this.setState({
      imageClicked: true
    });
  }

  render() {
    return (
      <React.Fragment>
        
        <div className="overlay-image" style={{ display: this.state.imageClicked ? 'none' : 'flex' }}
          onClick={this.handleImageClick}>
          <img src="https://replicate.delivery/pbxt/fFBkWgaGvkzgWigeKGfAfdIefoam7Xv9ZJ3XMJnsZH31lnxJE/out..jpeg"
            alt="overlay" />
        </div>
        
        <div className="content-wrapper" style={{ display: this.state.imageClicked ? 'block' : 'none' }}>
          <HeaderComponent />

          <div className='banner-image w-100 vh-100 d-flex justify-content-center align-items-center'>
            <div className="content">
                <h1 className="text-size-h1 text-black text-left" style={{ color: 'black' }}>About CG-Tournament</h1>
                <p>Welcome to CG-Tournament-Manager, the ultimate platform for organizing and managing your very own tournaments, fixtures, player rosters, and league tables! Whether you're an avid sports enthusiast or just looking for a fun way to bring people together, our user-friendly interface makes it easy to create and customize your very own tournament.</p>
                <p>With CG-Tournament-Manager, you can:</p>
                <ul className="button-css text-black">
                <li>Create and manage your own tournaments</li>
                <li>Add and manage teams and players</li>
                <li>Generate fixtures and schedules</li>
                <li>Track scores and standings in real-time</li>
                </ul>
                <p>Join the thousands of users who have already chosen CG-Tournament-Manager for their sports management needs. Sign up today and get started!</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

