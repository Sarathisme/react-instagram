import React, {Component} from "react";
import Navbar from "./Navbar";
import {Fab} from "@material/react-fab";
import '@material/react-fab/dist/fab.css';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Fab icon={<span className="material-icons"><i className="fas fa-plus-circle"/></span>}/>
            </div>
        );
    }
}

export default Dashboard;