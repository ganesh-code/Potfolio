// import React from 'react'
import Logo from "../assets/Logo.png";
import Resume from "../assets/resume.pdf";
// import PropTypes from 'prop-types';


const Header = () => {
  // const { bg } = props;
  const button = {
    padding : "6px",
    border : "2px solid black",
    boxShadow : "7px 7px 0px 0px",
    
  }
  return (
    <div>
      <nav
        className="mb-4 px-5 navbar navbar-expand-lg bg-body-tertiary rounded-5"
        data-bs-theme="light"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" style={{ width: "50px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <a href={Resume} download={Resume}>
              <button style={button} type="download">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};


// Header.propTypes = {
//   bg: PropTypes.string, // Specify the expected type for the bg prop
// };

export default Header;
