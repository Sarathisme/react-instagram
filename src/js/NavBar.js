import React, {Component} from 'react';
import {withCookies} from "react-cookie";
import '../css/NavBar.css';
import {Redirect} from 'react-router-dom';

class NavBar extends Component{

    constructor(props) {
        super(props);

        this.state = {
            logout: false
        };

        this.logout = this.logout.bind(this);
    }

    logout() {
        const {cookies} = this.props;
        cookies.remove('id');

        this.setState({
            logout: true
        });
    }

    render() {

        if(this.state.logout) {
            return(
                <Redirect to='/'/>
            );
        } else {
            return (
                <div className='nav-bar'>
                    <div className='container nav-bar-content'>
                        <div className="container row nav-bar-row">
                            <div className="nav-content-left col-lg-3 col-md-6 col-sm-6">
                                <img src={process.env.PUBLIC_URL + '/favicon.ico'} width="36" height="36" alt='logo'/>
                                <div id="divider"/>
                                <h1 className="name dashboard-name">Instagram</h1>
                            </div>
                            <div className="col-lg-6 nav-content-middle">
                                <input type="text" className='search form-control form-control-sm'
                                       placeholder="Search"/>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 nav-content-right">
                                <i className="fas fa-sign-out-alt" onClick={this.logout}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default withCookies(NavBar);