import React, { Component } from 'react'

import logo from '../img/logo4.png';
import './splash.css';

class Splash extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    JKIMTECH <small style={{fontSize: '.4em',
                     color: 'aliceblue'}}>
                        this site is under meintenance
                        </small>
                </p>
            </header>
        </div>
        </React.Fragment>
    );
    }
}
 

export default Splash;