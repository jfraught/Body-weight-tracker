import React from 'react';

const Home = () => {
    return (
        <main>
            <h2>Track Your Weight Progress</h2>
            <p>
                Whether your goal is to bulk, cut, or maintain, 
                we've got your back (and waist)!
            </p>

            <form>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue='Your Name'></input>
                </div>

                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' defaultValue='Your Email'></input>
                </div>

                <div>
                    <label htmlFor='password'>Name:</label>
                    <input type='text' name='password' defaultValue='Password'></input>
                </div>

                <button>Let the Changes Begin!</button>
            </form>

            <hr/>

            <h2>What We Do</h2>
                <p>
                    We're all about helping you achieve your body weight goals. <br/>
                    Track and Monitor your progress daily. <br/>
                    Upload progress pictures to see how far you've come!
                </p>
            <hr/>

            <h2>What You Do</h2>
                <h3>Fill Out the Form Above!</h3>
                    <p>You know you want to...</p>
                <h3>Set Your Goals</h3>
                    <p>Where would you like to be?</p>
                <h3>Take Your Initial Measurments</h3>
                    <p>Body Weight, Waist Circumference, and progress pics.</p>
                <h3>See Results!</h3>
                    <p>Watch your progress!</p>
            <hr/>

            <h2>Our Templates</h2>
                <div>
                    <figure>
                        <img 
                            src={require(`../assets/images/Landing/1.png`).default}
                            alt=''
                            height='300em' 
                        />
                        <figcaption>Lean and Mean - Sebastian!</figcaption>
                    </figure>
    
                    <figure>
                        <img 
                            src={require(`../assets/images/Landing/1.png`).default}
                            alt=''
                            height='300em' 
                        />
                        <figcaption>Built and Beefy - Dan!</figcaption>
                    </figure>
    
                    <figure>
                        <img 
                            src={require(`../assets/images/Landing/1.png`).default}
                            alt=''
                            height='300em' 
                        />
                        <figcaption>THICCCCCCCC - Jordan!</figcaption>
                    </figure>
                </div>
        </main>
    );
};

export default Home;