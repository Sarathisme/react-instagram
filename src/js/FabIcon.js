import React, {Component} from "react";
import {withCookies} from "react-cookie";
import {Fab} from "@material/react-fab";
import '@material/react-fab/dist/fab.css';
import '../css/FabIcon.css';

class FabIcon extends Component {

    onFabClick() {

    }

    render() {
        return(
            <div className="fab-container">
                <Fab icon={<span className="material-icons"><i className="fas fa-plus-circle"/></span>} onClick={this.onFabClick}/>
            </div>
        );
    }
}

export default withCookies(FabIcon);