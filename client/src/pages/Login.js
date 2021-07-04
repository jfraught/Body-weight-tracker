import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = props => {
    const [formState, setFormState] = useState({ display_name: '', password: '' });
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

            let display_name = data.login.user.display_name
            window.location.assign(`/dashboard/${display_name}`)
            
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
                    <label htmlFor='display_name' className='signup-label'>Diaplay Name:</label>
                    <input 
                    type='text' 
                    name='display_name'  
                    placeholder="Your Display Name" 
                    className="form-input"
                    id="display_name" 
                    onChange={handleChange} />
                </div>

                <br/>

                <div>
                    <label htmlFor='password' className='signup-label'>Password:</label>
                    <input 
                    type='password' 
                    name='password' 
                    placeholder="********" 
                    className='form-input' 
                    id="password"
                    onChange={handleChange} />
                </div>
            
                <br/>

                <button type='submit'>Sign In</button>
            </form>

            {error && <div className="login-error">Something went wrong ☹️</div>}
        </section>
    );
};

export default Login;