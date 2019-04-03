import React, {Component} from 'react';
import {withCookies} from "react-cookie";
import '../css/Feed.css';
import Post from './Post';

class Feed extends Component {

    constructor(props) {
        super(props);

        this.state= {
            posts: []
        };

        this.refreshFeed = this.refreshFeed.bind(this);
    }

    refreshFeed() {
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
                    posts: results.reverse()
                });
            });
        }).catch(error => {
            console.log(error);
        });
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("here too", nextProps.refresh);
        if(nextProps.refresh) {
            this.refreshFeed();
        }
    }

    componentWillMount() {
        this.refreshFeed();
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