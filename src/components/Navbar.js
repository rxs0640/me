import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './css/Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: window.location.pathname
        }

    }

    componentDidMount() {
       
    }


    render() {
        return(
            <nav className='navbar'>
                <div className='navbar-container'>
                    <div className='navbar-logo'>
                        <Link to='/' className='navbar-logo'>
                            <div>Roger</div>
                            <div style={{paddingLeft:'25px'}}>Sengphanith</div>
                        </Link>
                    </div>
                    <div className='navbar-break' />
                    <div className='navbar-title'>
                        Software Engineer
                    </div>
                    <nav className='navbar-links'>
                        <li className='navbar-link-item'>
                            <Link to='/Me' className={this.state.page === '/Me' ? 'nav-link-active' : 'nav-link'}>
                                Home
                            </Link>
                        </li>
                        <li className='navbar-link-item'>
                            <Link to='/Projects' className={this.state.page === '/Projects' ? 'nav-link-active' : 'nav-link'}>
                                Projects
                            </Link>
                        </li>
                        <li className='navbar-link-item'>
                            <Link to='/About' className={this.state.page === '/About' ? 'nav-link-active' : 'nav-link'}>
                                About
                            </Link>
                        </li>
                    </nav>
                </div>
            </nav>
        );
    }
}

export default Navbar