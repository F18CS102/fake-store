import React from 'react';
import './Navbar.css';
function Navbar() {
    return (
        <div>
            <header className="header_section" style={{ marginBottom: '20px' }}>
                <nav className="navbar navbar-expand-lg custom_nav-container">
                    <a className="navbar-brand" href="index.html">
                        <span>
                            Giftos
                        </span>
                    </a>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""></span>
                    </button> */}

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <li className="nav-item">
                                <a className="nav-link" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Shop
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Why Us
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Testimonial
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact Us</a>
                            </li>
                        </ul>
                        <div className="user_option">
                            <a href="" style={{ textDecoration: "none" }}>
                                <i className="fa fa-user" aria-hidden="true"></i>
                                <span>
                                    Login
                                </span>
                            </a>
                            <a href="">
                                <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                            </a>
                            <form className="form-inline ">
                                <button className="btn nav_search-btn" type="submit">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )

}

export default Navbar
