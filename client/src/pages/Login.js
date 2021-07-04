import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = props => {
    const [formState, setFormState] = useState({display_name: '', password: ''});
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    console.log(user);

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });
            console.log(data);
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
                    <label htmlFor='display_name' className='signup-label'>Diaplay Name:</label>
                    <input type='text' name='display_name'  placeholder="Your Display Name" className="form-input" onChange={handleChange} />
                </div>

                <br/>

                <div>
                    <label htmlFor='password' className='signup-label'>Password:</label>
                    <input type='password' name='password' placeholder="********" className='form-input' onChange={handleChange} />
                </div>
            
                <br/>

                <button type='submit'>Sign In</button>
            </form>

            {error && <div className="login-error">Something went wrong ☹️</div>}
        </section>
    );
};

export default Login;