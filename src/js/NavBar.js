import React, {Component} from 'react';
import {withCookies} from "react-cookie";
import '../css/NavBar.css';
import {Redirect} from 'react-router-dom';
import AddIcon from "./Dashboard";

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
        cookies.remove('insta-id');

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
                            <div className="nav-content-left col-lg-6 col-md-6 col-sm-6 float-left">
                                <img src={process.env.PUBLIC_URL + '/favicon.ico'} width="36" height="36" alt='logo'/>
                                <div id="divider"/>
                                <h1 className="name dashboard-name">Instagram</h1>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 nav-content-right" align="right">
                                <i className="far fa-times-circle" onClick={this.logout}/>
                                <i className="far fa-user-circle"/>
                                <AddIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default withCookies(NavBar);