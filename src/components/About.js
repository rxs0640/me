import React, { useState } from 'react';

import './css/About.css'
import Navbar from './Navbar'

class About extends React.Component {

    render() {
        return(
            <>
               <Navbar />
               <div className='content-body'>About</div>
            </>
        );
    }
}

export default About