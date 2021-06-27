import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <section className="login">
            <form>
                <div>
                    <label htmlFor='display-name' className="signup-label">Display Name:</label>
                    <input type='input' name='display-name' defaultValue='Display Name' className="form-input"></input>
                </div>

                <br/>

                <div>
                    <label htmlFor='email' className="signup-label">Email:</label>
                    <input type='email' name='email' defaultValue='Your Email' className="form-input"></input>
                </div>

                <br/>

                <div>
                    <label htmlFor='password' className="signup-label">Password:</label>
                    <input type='text' name='password' defaultValue='Password' className="form-input" ></input>
                </div>
            
                <br/>

                <button>Create Your Account</button>
            </form>

            <p>Already Have an account? <span><Link to='/login'>Login!</Link></span></p>
        </section>
    );
};

export default Signup;