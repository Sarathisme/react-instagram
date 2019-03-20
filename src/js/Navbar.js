import React, {Component} from 'react';
import {withCookies} from "react-cookie";
import '../css/Navbar.css';

class Navbar extends Component{
    render() {
        return(
            <div className='nav-bar'>
                <div className='container nav-bar-content'>
                    <div className="row nav-bar-row">
                        <div className="nav-content-left col-lg-3 col-md-6 col-sm-6">
                            <img src={process.env.PUBLIC_URL+'/favicon.ico'} width="36" height="36" alt='logo'/>
                            <div id="divider"/>
                            <h1 className="name dashboard-name">Instagram</h1>
                        </div>
                        <div className="col-lg-6 nav-content-middle">
                            <input type="text" className='form-control form-control-sm' placeholder="Search"/>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 nav-content-right">
                            <i className="fas fa-sign-out-alt"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withCookies(Navbar);