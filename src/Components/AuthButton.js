import React from 'react'
import { Link, withRouter } from 'react-router-dom'

// withRouter lets you decorate components with context
function AuthButton(props) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const logout = () => {
        currentUser = null;
        localStorage.removeItem('currentUser');
        props.history.push('/');
    }

    const createButton = () => {
        if (currentUser !== null) {
            return  <button onClick={() => logout()}>Logout</button>
        } else {
            return (
                <Link to={`/login`}>
                    <button>Login</button>
                </Link>
            )
        }
    }

    let button = createButton();
    return button;
}

export default withRouter(AuthButton)