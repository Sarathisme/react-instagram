import React, {Component} from 'react';
import {withCookies} from "react-cookie";
import '../css/Feed.css';

class Feed extends Component {
    render() {
        return(
            <div className="news-feed container">
                <div className="card feed-card">
                    <div className="profile-card">
                        <img src={process.env.PUBLIC_URL+'/favicon.ico'} width="36" height="36" className="card-img-top profile-image" alt="profile"/>
                        <p className="profile-name">sarath_sattiraju</p>
                        <hr/>
                    </div>
                    <div className="post">
                        <div className="card-body">
                            <img src={process.env.PUBLIC_URL+'/temp.jpg'} className="posted-image" alt="Posted"/>
                        </div>
                        <div className='card-footer card-info'>
                            <span className="info-name">sarath_sattiraju</span>
                            <p className="post-data">This is a dummy text</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withCookies(Feed);