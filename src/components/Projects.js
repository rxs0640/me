import React, { useState } from 'react';

import './css/Projects.css'
import Navbar from './Navbar'

class Projects extends React.Component {

    render() {
        return(
            <>
               <Navbar />
               <div className='content-body'>Projects</div>
            </>
        );
    }
}

export default Projects