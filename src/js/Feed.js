import React, {Component} from 'react';
import {withCookies} from "react-cookie";
import '../css/Feed.css';
import Post from './Post';

class Feed extends Component {

    constructor(props) {
        super(props);

        this.state= {
            posts: [{
                profile: process.env.PUBLIC_URL+'/favicon.ico',
                post: process.env.PUBLIC_URL+'/temp.jpg',
                name: "sarath_sattiraju",
                description: "This is a dummy text"
            }]
        }
    }

    componentWillMount() {

    }

    render() {
        return(
            <div className="news-feed container">
                {this.state.posts.map((data) => {
                    return <Post profile={data.profile} post={data.post} name={data.name} description={data.description} />
                })}
            </div>
        );
    }
}

export default withCookies(Feed);