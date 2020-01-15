import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Templates extends Component {
    render() {
        return (
            <div>
                <h1>Templates</h1>
                <Link to={'/page/edit'}><button>Edit</button></Link>
            </div>
        )
    }
}
