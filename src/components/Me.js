import React, { useState } from 'react';

import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
import Projects from './Projects'
import './css/Me.css'


class Me extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 'me',
        }
    }

    handlePageChange = (newPage) => {
        this.setState({
            page: newPage
        });
    }
    
    render() {
        return(
            <div>
                <Navbar onPageChange={this.handlePageChange} page={this.state.page}/>
                { this.state.page === 'me' ?
                <div className='content-body'>
                    <div className='body-intro'>
                        <h2 className='body-mid-title'>Hi, my name is Roger Sengphanith.</h2>
                        <img className='profile-image' src={process.env.PUBLIC_URL + '/images/profile.jpg'}></img>
                        <p className='body-text'>Short intro here</p>
                    </div>
                </div>
                : this.state.page === 'about' ?
                <About />
                : ''}
                <Footer />
            </div>
        );
    }
}

export default Me