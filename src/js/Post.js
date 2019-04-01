import React, {Component} from 'react';
import {withCookies} from "react-cookie";
import '../css/Post.css';

class Post extends Component {
    render() {
        return (
            <div className="card feed-card">
                <div className="profile-card">
                    <img src={this.props.profile} width="36" height="36" className="card-img-top profile-image" alt="profile"/>
                    <p className="profile-name">{this.props.name}</p>
                    <hr/>
                </div>
                <div className="card-body">
                    <img src={this.props.post} className="posted-image" alt="Posted"/>
                </div>
                <div className='card-footer card-info'>
                    <span className="info-name">{this.props.name}</span>
                    <p className="post-data">{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default withCookies(Post);