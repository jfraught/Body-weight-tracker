import React from 'react';

const Login = () => {
    return (
        <section className="login">
            <form>
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

                <button>Sign In</button>
            </form>
        </section>
    );
};

export default Login;