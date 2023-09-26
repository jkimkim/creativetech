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
                        {/* spotify embed playlist */}
                        
                <p>
                    JKIMTECH <small style={{fontSize: '.4em',
                     color: 'aliceblue'}}>
                        this site is under meintenance
                        </small>
                        </p>
                        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWSqmBTGDYngZ?si=2169db81bae34678"
                            width="100%"
                            height="352"
                            frameborder="0"
                            allowfullscreen=""
                            allowtransparency="true"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">

                        </iframe>
                        {/* <iframe
                            style="border-radius:12px"
                            src="https://open.spotify.com/embed/playlist/37i9dQZF1DWSqmBTGDYngZ?utm_source=generator&theme=0"
                            width="100%"
                            height="352"
                            frameBorder="0"
                            allowfullscreen=""
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">

                        </iframe> */}
            </header>
        </div>
        </React.Fragment>
    );
    }
}
 

export default Splash;