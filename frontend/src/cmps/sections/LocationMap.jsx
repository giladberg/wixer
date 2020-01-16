import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class LocationMap extends Component {
    render() {
        return (
            <div className="location-map-container flex row">
                <div className='map-container'>
                    <Map style={{ width: '100%', height: '200px', }} google={this.props.google} initialCenter={{
                        lat: 40.854885,
                        lng: -88.081807
                    }} zoom={14}>

                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />
                    </Map>
                </div>

                <div className="location-details flex column justify-center">
                    <span>HaBonim St 4</span>
                    <span>Habonim St4</span>
                    <span>Ramat Gan</span>
                    <button>Take me there!</button>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    style: { width: 0, height: 0 },
    apiKey: ('AIzaSyBEtjYeW53Az1V2NfD1w5i99iZM3r6Dmhc')
})(LocationMap)