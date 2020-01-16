import React, { Component } from 'react';

export default class ImageGrid extends Component {

    render() {
        return (
            <div className="image-grid-container section-container flex">
                <div className="main-image-grid"><img src="https://cdn.hipwallpaper.com/i/18/22/ofOD6c.jpg"></img></div>
                <div className="image-grid-sub-container flex column">
                    <div className="image-grid-sub-1"><img src="https://cdn0.weddingwire.ca/img_r_22474/4/7/4/2/r10_2x_50_22474.jpg"></img></div>
                    <div className="image-grid-sub-1"><img src="https://www.happywedding.app/blog/wp-content/uploads/2019/07/Tips-and-Ideas-for-Groom-Bachelor-Party.jpg"></img></div>
                </div>
                <div className="image-grid-sub-container flex column">
                    <div className="image-grid-sub-1"><img src="http://www.realtalktime.com/wp-content/uploads/2019/11/BeerCOV.jpg"></img></div>
                    <div className="image-grid-sub-1"><img src="https://ak3.picdn.net/shutterstock/videos/7865053/thumb/2.jpg"></img></div>
                </div>
            </div>
        );
    }
}