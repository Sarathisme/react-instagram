import React, {Component} from "react";
import NavBar from "./NavBar";
import '../css/Dashboard.css';
import Feed from './Feed';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "refresh": false,
            "profile": false
        };

        this.refreshFeed = this.refreshFeed.bind(this);
        this.isProfile = this.isProfile.bind(this);
    }

    refreshFeed() {
        this.setState({
            refresh: true
        });
    }

    isProfile(flag) {
        this.setState({
           "refresh": true,
           "profile": flag
        });
    }

    render() {
        return (
            <div>
                <NavBar refresh={this.refreshFeed} isProfile={this.isProfile}/>
                <Feed refresh={this.state.refresh} profile={this.state.profile}/>
            </div>
        );
    }
}

export default Dashboard;