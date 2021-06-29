import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth'; 

const Signup = () => {
    const [formState, setFormState] = useState({display_name: '', email: '', password: ''});
    const [addUser, { error }] = useMutation(ADD_USER);

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
            const { data } = await addUser({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <section className="login">
            <form on onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='display_name' className='signup-label'>Display Name:</label>
                    <input type='display_name' name='display_name' defaultValue='Display Name' className='form-input' onChange={handleChange} />
                </div>

                <br/>

                <div>
                    <label htmlFor='email' className='signup-label'>Email:</label>
                    <input type='email' name='email' defaultValue='Your Email' className='form-input' onChange={handleChange} />
                </div>

                <br/>

                <div>
                    <label htmlFor='password' className='signup-label'>Password:</label>
                    <input type='text' name='password' defaultValue='Password' className='form-input' onChange={handleChange} />
                </div>
            
                <br/>

                <button type='submit'>Create Your Account</button>
            </form>

            {error && <div>Your signup went wrong ☹️</div>}

            <p>Already Have an account? <span><Link to='/login'>Login!</Link></span></p>
        </section>
    );
};

export default Signup;