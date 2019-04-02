import React, {Component} from "react";
import NavBar from "./NavBar";
import '../css/Dashboard.css';
import Feed from './Feed';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Feed/>
            </div>
        );
    }
}

export default Dashboard;