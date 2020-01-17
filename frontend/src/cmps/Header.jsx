import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from '../cmps/NavBar.jsx';

export default class Header extends Component {

    state = { isHeaderTrans: true }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        this.setState({ isHeaderTrans: window.scrollY < 1 });
    }
    render() {
        const {state} = this
        return (
            <header className={state.isHeaderTrans ? '' : 'colorful'}>
                <div className='flex justify-between'>
                    <div className='main-logo'><NavLink activeClassName="active" to='/' exact><img src={require('../assets/images/logo.png')} alt="logo" /></NavLink></div>
                    <NavBar />
                </div>
            </header>
        )
    }
}
