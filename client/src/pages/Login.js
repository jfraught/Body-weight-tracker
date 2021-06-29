import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = props => {
    const [formState, setFormState] = useState({email: '', password: ''});
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        setFormState({
            email: '',
            password: ''
        });
    };

    return (
        <section className="login">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email' className='signup-label'>Email:</label>
                    <input type='email' name='email' defaultValue='Your Email' className="form-input" onChange={handleChange} />
                </div>

                <br/>

                <div>
                    <label htmlFor='password' className='signup-label'>Password:</label>
                    <input type='password' name='password' defaultValue='Password' className='form-input' onChange={handleChange} />
                </div>
            
                <br/>

                <button type='submit'>Sign In</button>
            </form>

            {error && <div>Something went wrong ☹️</div>}
        </section>
    );
};

export default Login;