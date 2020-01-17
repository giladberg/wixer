import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../cmps/NavBar.jsx';

export default class Header extends Component {
    render() {
        return (
            <header className='flex justify-between'>
                <div className='main-logo'><NavLink activeClassName="active" to='/' exact><img src={require('../assets/images/logo.png')} alt="logo" /></NavLink></div>
                <NavBar/>
            </header>
        )
    }
}
