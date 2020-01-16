import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dash-container">
                <div className="dash-title">My sites</div>
                <div className="dash-sub-title">You don't have any sites yet.</div>
                <Link to={'/templates'}><button className='dash-btn'>Go To Templates</button></Link>
            </div>
        )
    }
}
