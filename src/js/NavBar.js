import React, {Component} from 'react';
import {withCookies} from "react-cookie";
import '../css/NavBar.css';
import {Redirect} from 'react-router-dom';
import AddIcon from "./AddIcon";

class NavBar extends Component{

    constructor(props) {
        super(props);

        this.state = {
            logout: false,
            profile: false
        };

        this.logout = this.logout.bind(this);
        this.profile = this.profile.bind(this);
        this.feed = this.profile.bind(this);
    }

    logout() {
        const {cookies} = this.props;
        cookies.remove('insta-id');

        this.setState({
            logout: true
        });
    }

    profile() {

        if(this.state.profile) {
            this.setState({
                profile: false
            });
        } else {
            this.setState({
                profile: true
            });
        }

        this.props.isProfile(this.state.profile);
    }

    render() {
        if(this.state.logout) {
            return(
                <Redirect to='/'/>
            );
        } else {
            let icon;
            if(!this.state.profile) {
                icon = <i className="fas fa-user-alt" onClick={this.profile}/>;
            } else {
                icon = <i className="far fa-newspaper" onClick={this.profile}/>;
            }

            return(
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
                                {icon}
                                <AddIcon refresh={this.props.refresh}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default withCookies(NavBar);