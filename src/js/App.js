import React, { Component } from 'react';
import '../css/App.css';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

class App extends Component {
    constructor(props) {
        super(props);

        this.onSuccess = this.onSuccess.bind(this);
        this.onFailure = this.onFailure.bind(this);
    }

    onSuccess(response) {
        fetch(`${process.env.REACT_APP_API_URL}/users/auth`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            mode: "cors",
            body: JSON.stringify({
                id: response.id,
                name:response.name,
                photo: `https://graph.facebook.com/${response.id}/picture?type=normal`
            }),
        }).then(response => {
            response.json().then(data => {
                if(data.message === "success") {

                } else {
                    alert("Something's wrong! Please try again later.")
                }
            });
        }).catch(error => {
            console.log(error);
        });
    }

    onFailure(error) {

    }

    render() {
        return (
            <div className="App">
                <div className="container">
                    <div className="row main">
                        <div className="col-lg-6 screenshots">
                            <img className="android" src={process.env.PUBLIC_URL + '/android.png'} width='270' height='500' alt='Screenshot Android'/>
                            <img className="iOS" src={process.env.PUBLIC_URL + '/iOS.png'} width='270' height='500' alt='Screenshot iOS'/>
                        </div>

                        <div className="col-lg-6 auth">
                            <div className="auth-content">
                                <h1 className="name">Instagram</h1>
                                <h6 className="main-description text-muted">Sign up to see photos and videos<br/> from your friends</h6>
                                <FacebookLogin
                                    appId={process.env.REACT_APP_CLIENT_ID}
                                    autoLoad={true}
                                    render={renderProps => (
                                        <div className='facebook-button-div'>
                                            <button className="facebook-button" onClick={renderProps.onClick}>
                                                <span className="facebook-icon-div"><i className="fab fa-facebook-f"/></span>
                                                Login with Facebook
                                            </button>
                                        </div>
                                    )}
                                    callback={this.onSuccess}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
