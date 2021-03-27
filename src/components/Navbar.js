import React from 'react';
import { Link } from 'react-router-dom';

import './css/Navbar.css'

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            setLinks: true,
        }

        this.windowEventListener = this.windowEventListener.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.windowEventListener);
    }

    windowEventListener = event => {
        if(window.innerWidth <= 960) {
            this.setState({
                setLinks: false
            })
        }
        else {
            this.setState({
                setLinks: true
            })
        }
    }

    handlePageChange = (newPage) => {

        this.props.onPageChange(newPage)
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
                    <nav className='navbar-links' style={this.state.setLinks ? {} : {display: 'none'}}>
                        <li className='navbar-link-item' onClick={() => this.handlePageChange('me')}>
                            <Link className={this.props.page === 'me' ? 'nav-link-active' : 'nav-link'}>
                                Home
                            </Link>
                        </li>
                        <li className='navbar-link-item' onClick={() => this.handlePageChange('projects')}>
                            <Link className={this.props.page === 'projects' ? 'nav-link-active' : 'nav-link'}>
                                Projects
                            </Link>
                        </li>
                        <li className='navbar-link-item' onClick={() => this.handlePageChange('about')}>
                            <Link className={this.props.page === 'about' ? 'nav-link-active' : 'nav-link'}>
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