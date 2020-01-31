import React, {useState} from 'react';
import {withRouter} from 'react-router-dom'

function LoginForm(props) {
    const initialValues = {username: '', password: ''};
    const [values, setValues] = useState(initialValues);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState({});
    let currentUser = JSON.parse(localStorage.getItem('currentUser'))
    const options = {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        // console.log('This login has been submitted', values);
        fetch('http://localhost:3001/api/authenticate', options)
            .then(res => res.json())
            .then(res => {
                if (currentUser !== res) {
                    currentUser = res;
                    localStorage.setItem('currentUser', JSON.stringify(currentUser))
                }
                setIsSubmitting(false);
                props.history.push('/')
            })
            .catch(err => {
                setError({message: 'An error occurred. Please try again.'});
                setValues(initialValues);
                setIsSubmitting(false);
                console.error(err);
            });
    }

    const handleChange = (event) => {
        const target = event.target;
        const targetValue = target.value;
        const name = target.name;
        //console.log('form input name: ', name);
        setValues({...values, [name]: targetValue});
        //console.log(values);
    }

    return (
        <form onSubmit={handleSubmit}>
            {<h4 className="error">{error.message}</h4>}
            <input
                id="username"
                name="username"
                type="text"
                value={values.username}
                placeholder="Username..."
                onChange={handleChange}
                className="form-control"
            />
            <br/>
            <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                placeholder="password"
                onChange={handleChange}
                className="form-control"
            />
            <button type="submit" className="btn btn-default" disabled={isSubmitting}>
                Login
            </button>
        </form>
    );
}

export default withRouter(LoginForm);