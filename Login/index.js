import React from 'react';
import LoginForm from "../Components/LoginForm";
import './login-styles.css'

function Login(props) {
    return (
        <div>
            <img
                className="logo"
                src={`${process.env.PUBLIC_URL}/images/logo.gif`}
                alt=""
            />
            <div id="page-wrap">
            <LoginForm/>
            </div>

            <div id="bg">
                <img
                    src={`${process.env
                        .PUBLIC_URL}/images/backdrops/login-backdrop.jpg`}
                    alt=""
                />
            </div>
        </div>
    );
}

export default Login;