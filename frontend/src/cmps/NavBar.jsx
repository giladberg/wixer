import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className='flex'>
                <div className='link-container'><NavLink activeClassName="active" to='/dashboard' exact>My sites</NavLink></div>
                <div className='link-container'><NavLink activeClassName="active" to='/templates'>Templates</NavLink></div>
                <div className='link-container'><NavLink activeClassName="active" to='/Auth'>Sign in</NavLink></div>
                {/* <div className='link-container'><NavLink activeClassName="active" to='/noteApp'>Examples</NavLink></div> */}
            </nav>
        )
    }
}
