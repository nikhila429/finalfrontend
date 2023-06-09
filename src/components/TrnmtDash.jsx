import React from 'react';
import { Link } from 'react-router-dom';
import '../css/TrnmtDash.css';

const TrnmtDash = (props) => {
    
    const TId = props.TId;
    const OId = props.OId;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" >
        <div className="container">
        
              <Link className="nav-link text-white" to={{
                      pathname: "/admintdb",
                      state: { TId: TId,  userId: OId }
                    }}><b style={{color: 'black'}}>Owner ID: {OId} DashBoard </b></Link>
              
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
              <Link className="nav-link text-white" to={{
                      pathname: "/roundlist",
                      state: { TId: TId,  OId: OId }
                    }}><b style={{color: 'black'}}>Round List</b></Link>
              </li>
              
              <li className="nav-item">
              <Link className="nav-link text-white" to={{
                      pathname: "/prqstlist",
                      state: { TId: TId,  OId: OId }
                    }}><b style={{color: 'black'}}>Player Request List</b></Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-white" to={{
                      pathname: "/playerlist",
                      state: { TId: TId,  OId: OId }
                    }}><b style={{color: 'black'}}>Player List</b></Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default TrnmtDash;
