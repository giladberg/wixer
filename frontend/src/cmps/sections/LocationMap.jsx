import React, { Component } from 'react';

export default class LocationMap extends Component {
    render() {
        return <div className="location-map-container section-container flex row">

            <div className="map-container">
                <iframe title="google-map" width="400" height="400" id="gmap_canvas" src={`https://maps.google.com/maps?q=${'israel netanya nordo'}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0">
                </iframe>
            </div>

            <div className="location-details flex column justify-center">
                <span className="location-street">Nordo 17 St</span>
                <span className="location-city">Netanya</span>
                <span className="location-country">Israel</span>
            </div>

        </div>
    }
}

