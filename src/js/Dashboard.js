import React, {Component} from "react";
import NavBar from "./NavBar";
import '../css/Dashboard.css';
import Feed from './Feed';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            "refresh": false
        };

        this.refreshFeed = this.refreshFeed.bind(this);
    }

    refreshFeed() {
        this.setState({
            refresh: true
        });

        alert("here");
    }

    render() {
        return (
            <div>
                <NavBar refresh={this.refreshFeed}/>
                <Feed refresh={this.state.refresh}/>
            </div>
        );
    }
}

export default Dashboard;