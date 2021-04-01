import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">Springboot + React Exercise for Ensolvers</span> <br/>
                    <span className="text-muted">By Tomas Gimenez Rioja</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;