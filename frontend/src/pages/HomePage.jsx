import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>homepage</h1>
                <Link to={'/dashboard'}><button>get started</button></Link>
            </div>
        )
    }
}
