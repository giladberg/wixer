import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div className="homePage-container">
                <div className='HomePage-title'>Be the creator of your website</div>
                <div className='HomePage-sub-title'>Discover the platform that gives you the freedom to create,
                    design, manage and develop your bachelor party.</div>
                <Link to={'/dashboard'}><button className='main-btn'>get started</button></Link>
            </div>
        )
    }
}
