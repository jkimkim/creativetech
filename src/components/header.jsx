import React, { Component } from 'react';

import logo from '../img/logo4.png';
import myFunction from '../js/kim.js';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <header id="tomhead" className="head" role="navigation" aria-label="Main">
            <div className="top_bar">
                <div className="top_bar_wrapper">
                    <p className="description">WELCOME TO JKIMTECH</p>
                    <nav className="social_nav">
                        <div className="social_menu_container">
                            <ul style={{paddingLeft: '0%'}} id="social_menu" className="menu">
                                <li id="twitter" className="twitter_icon">
                                    <a href="https://twitter.com/Johnklm21">
                                        <i class="fa-brands fa-twitter"></i>
                                    </a>
                                </li>
                                <li id="fb" className="fb_icon">
                                    <a href="https://www.facebook.com/profile.php?id=100023318902564">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                </li>
                                <li id="ig" className="ig_icon">
                                    <a href="https://www.instagram.com/kimjohnklm21/?hl=en">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li id="ig" className="ig_icon">
                                    <a href="https://github.com/jkimkim">
                                        <i className="fab fa-github"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="btn-floating btn-li mx-1"
                                        href="https://www.linkedin.com/in/john-kimiti-9322201a2/">
                                        <i className="fab fa-linkedin-in"> </i>
                                    </a>
                                </li>
                                <li id="ig" className="ig_icon login-btn">
                                    <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        <i className="fa-solid fa-right-to-bracket"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
            {/* //--wrapper-- */}
            <div className="stwrapper">
                <div className="site_brandingwr">
                    <div className="site_branding">
                        <a href="index.html" className="logo" rel="home" aria-current="page">
                            <img width="100" height="100" src={logo} className="custom-logo"
                                alt="the founder" data-image-title="white bg" data-image-description="jkimtech logo"/>
                        </a>
                        <h1 className="site_title">
                            <a href="index.html" rel="home">JKIMTECH</a>
                        </h1>
                    </div>
                    <nav id="navigation" className="main_nav" role="navigation">
                        <button className="menu_toggle" onClick={myFunction} aria-controls="top_menu"
                            aria-expanded="false">
                            <span>
                                <i className="fas fa-ellipsis-v"></i>
                            </span>
                            Menu
                        </button>
                        <div className="menu_container">
                            <ul id="top_menu" className="menu_nav" aria-expanded="false">
                                <li id="menu-item-1" className="active">
                                    <a href="index.html">Home</a>
                                </li>
                                <li id="menu-item-2" className="menu-item-2">
                                    <a href="contact.html">Contact</a>
                                </li>
                                <li id="menu-item-3" className="menu-item-3">
                                    <a href="aboutme.html">About</a>
                                </li>
                                <li id="menu-item-4" className="menu-item-4">
                                    <a href="posts.html">Posts</a>
                                </li>
                                <li id="dashboard" className="menu-item-2">
                                    <a href="comingsoon.html">comingsoon</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
            </React.Fragment>
        );
    }
}
 
export default Header;