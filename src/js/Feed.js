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
            },
            {
                profile: process.env.PUBLIC_URL+'/favicon.ico',
                post: process.env.PUBLIC_URL+'/temp.jpg',
                name: "sarath_sattiraju",
                description: "This is a dummy text"
            }]
        }
    }

    componentWillMount() {
        fetch(process.env.REACT_APP_API_URL + '/posts/get', {
            'method': 'post',
            headers: {
                'content-type': 'application/json'
            },
            mode: "cors",
        }).then(response => {
            response.json().then(data => {
                const results = [];
                const posts = data.posts.slice();
                posts.forEach((post, i) => {
                   results.push({
                       post: post.image,
                       description: post.description,
                       name: post.user[0].name,
                       profile: post.user[0].photo
                   });
                });
                this.setState({
                   posts: results
                });
            });
        }).catch(error => {
            console.log(error);
        });
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