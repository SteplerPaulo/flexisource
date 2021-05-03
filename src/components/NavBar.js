import React from "react";

function NavBar() {
    return (
      <React.Fragment> 
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#link">
              <img src="/assets/img/logo.png" alt="Logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#linknavbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#link">Research and policy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#link">Membership</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#link">Projects and partnerships</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#link">Events and programs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#link">News and resources</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#link">About</a>
                </li>
              </ul>
              <form className="d-flex">
                <i className="fa fa-search"></i>
              </form>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
  
export default NavBar;
  