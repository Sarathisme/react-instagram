import React, {Component} from "react";
import Navbar from "./Navbar";
import '../css/Dashboard.css';
import FabIcon from "./FabIcon";
import Feed from './Feed';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <FabIcon/>
                <Feed/>
            </div>
        );
    }
}

export default Dashboard;