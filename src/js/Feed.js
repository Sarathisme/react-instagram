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
        this.getFeed = this.getFeed.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    getFeed() {
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

    getProfile(id) {
        fetch(process.env.REACT_APP_API_URL + '/posts/user', {
            'method': 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            }),
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

    refreshFeed(id) {
        if(id !== -1) {
            this.getProfile(id);
        } else {
            this.getFeed();
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.refresh && nextProps.profile) {
            const {cookies} = this.props;
            this.refreshFeed(cookies.get('insta-id'));
        } else {
            this.refreshFeed(-1);
        }
    }

    componentWillMount() {
        this.refreshFeed(-1);
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