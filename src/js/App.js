import React, { Component } from 'react';
import '../css/App.css';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'

class App extends Component {
    constructor(props) {
        super(props);

        this.onFailure = this.onFailure.bind(this);
    }

    onSuccess(response) {
        console.log(response);
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
