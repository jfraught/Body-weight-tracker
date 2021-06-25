import React from 'react';

const Home = () => {
    return (
        <main>
            <section className="hero">
                <div className="cta">
                    <h2>Track Your Weight Progress</h2>
                    <p>
                        Whether your goal is to bulk, cut, or maintain, 
                        we've got your back (and waist)!
                    </p>
                </div>
    
                <form className="signup-form">
                    <h2>Let's Start Your Journey!</h2>
                    <div>
                        <label htmlFor='name' className="signup-label">Name:</label>
                        <input type='text' name='name' defaultValue='Your Name' className="form-input"></input>
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
    
                    <button>Let the Changes Begin!</button>
                </form>
        </section>

        <section id="what-we-do" className="intro">
            <div>
                <h2 className="headBorder">What We Do</h2>
                    <p>
                        We're all about helping you achieve your body weight goals. <br/>
                        Track and Monitor your progress daily. <br/>
                        Upload progress pictures to see how far you've come!
                    </p>
            </div>
        </section>
    
        <section id="what-you-do">
            <div>
                <h2 className="headBorder">What You Do</h2>
            </div>
                <div className="step">
                    <h3>Fill out the form above!</h3>
                        <div className="step-info">
                            <div className="step-img">
                                <img
                                    src={require(`../assets/images/Landing/1.png`).default}
                                    height="100vh"
                                    alt=""
                                />
                            </div>
                            <div className="step-text">
                                <p>You know you want to...</p>
                            </div>
                        </div>
                    <h3>Set Your Goals!</h3>
                        <div className="step-info">
                            <div className="step-img">
                                <img
                                    src={require(`../assets/images/Landing/1.png`).default}
                                    height="100vh"
                                    alt=""
                                />
                            </div>
                            <div className="step-text">
                                <p>Where would you like to be? </p>
                            </div>
                        </div>
                    <h3>Take your measurements!</h3>
                        <div className="step-info">
                            <div className="step-img">
                                <img
                                    src={require(`../assets/images/Landing/1.png`).default}
                                    height="100vh"
                                    alt=""
                                />
                            </div>
                            <div className="step-text">
                                <p>Body weight, waist circumference and progress pics!</p>
                            </div>
                        </div>
                    <h3>See Results!</h3>
                        <div className="step-info">
                            <div className="step-img">
                                <img
                                    src={require(`../assets/images/Landing/1.png`).default}
                                    height="100vh"
                                    alt=""
                                />
                            </div>
                            <div className="step-text">
                                <p>Watch as you progress towards your goal!</p>
                            </div>
                        </div>
                </div>
        </section>
    
        <section id="our-template">
            <div className="flex-row">
                <h2 className="headBorder">Our Templates</h2>
            </div>
                <div className="templates">
                    <figure>
                        <img 
                            src={require(`../assets/images/Landing/1.png`).default}
                            alt=''
                            height='300em' 
                        />
                        <figcaption>Lean and Mean Sebastian!</figcaption>
                    </figure>
    
                    <figure>
                        <img 
                            src={require(`../assets/images/Landing/1.png`).default}
                            alt=''
                            height='300em' 
                        />
                        <figcaption>Built and Beefy Dan!</figcaption>
                    </figure>
    
                    <figure>
                        <img 
                            src={require(`../assets/images/Landing/1.png`).default}
                            alt=''
                            height='300em' 
                        />
                        <figcaption>THICCCCCCCC Jordan!</figcaption>
                    </figure>
                </div>
        </section>
    
                <hr/>
        </main>
    );
};

export default Home;