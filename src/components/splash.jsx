import React, { Component } from 'react'

import logo from '../img/logo4.png';
import './splash.css';

class App extends Component {
    state = {  } 
    render() { 
        return (<div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                {/* <p>
                    This <code>is JKIMTECH</code> WELCOME!.
                </p>
                <a
                    className="App-link"
                    href="https://jkimtech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn more
                </a> */}
            </header>
        </div>
    );
    }
}
 

export default App;