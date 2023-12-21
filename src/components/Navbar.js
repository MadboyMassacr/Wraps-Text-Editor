import React from 'react'
import procType from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default function Navbar(prop) {

    let mode = prop.set;

    const SwitchButton = {
      // if mode is dark then color is white else color is black
      color: mode === 'dark' ? 'white' : 'black',
    }


    console.log(mode);
  return (
    <nav className={`navbar navbar-expand-lg bg-${(prop.set === 'light' ? 'light' : 'dark')} border-bottom border-body`} data-bs-theme={`${prop.set}`}>
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
        <img src="Glogo.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top"/>
      {prop.title}
        </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{prop.aboutText}</Link>
              </li>
            </ul>
            {/* <button className="btn btn-outline-success" style={myStyle} onClick={handleDarkClick}>{colState}</button> */}

            <div className={`form-check form-switch`} style={SwitchButton}>
              <input className="form-check-input" onClick={prop.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{mode === 'light' ? "Enable" : "Disable" } Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {
                    title: procType.string.isRequired,
                    aboutText: procType.string.isRequired
}

Navbar.defaultProps = {
                    title: 'Title',
                    aboutText: 'About'
}

