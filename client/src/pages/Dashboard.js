import React from 'react';
import Auth from '../utils/auth';

const Dashboard = () => {
    return (
        <section className="dashboard">
            {Auth.loggedIn() ? (
                <>
                    <h2>Dashboard</h2>
            
                    <div>
                        <ul>
                            <li>Pounds From Goal: <span></span></li>
                            <li>Inches From Goal: <span></span></li>
                            <li>BMI Points From Goal: <span></span></li>
                        </ul>
            
                        <button>
                            Add Daily Stats
                        </button>
                    </div>
            
                    <div className="mt-5">
                        <h3>Body Weight - Last 7 days</h3>
            
                        <table>
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                </tr>
                            </tbody>
                        </table>
                    </div><br/>
            
                    <div>
                        <h3>Waist Circumference - Last 7 days</h3>
            
                        <table>
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                </tr>
                            </tbody>
                        </table>
                    </div><br/>
            
                    <div>
                        <h3>BMI - Last 7 days</h3>
            
                        <table>
                            <thead>
                                <tr>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                    <th>Day</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                    <td>Measurment</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            
                    <div className="photo-section">
                        <div className="top-pics">
                            <figure>
                                <img
                                    src={require(`../assets/images/Landing/1.png`).default}
                                    alt=""
                                    height="300vh"
                                    className="p-2"
                                />
                                <figcaption>Start</figcaption>
                            </figure>
                            <figure>
                                <img
                                    src={require(`../assets/images/Landing/1.png`).default}
                                    alt=""
                                    height="300vh"
                                    className="p-2"
                                />
                                <figcaption>Current</figcaption>
                            </figure>
                        </div>
                        <div>
                            <img
                                src={require(`../assets/images/Landing/1.png`).default}
                                alt=""
                                height="300vh"
                                className="p-2"
                            />
                            <img
                                src={require(`../assets/images/Landing/1.png`).default}
                                alt=""
                                height="300vh"
                                className="p-2"
                            />
                        </div>
                        <div>
                            <img
                                src={require(`../assets/images/Landing/1.png`).default}
                                alt=""
                                height="300vh"
                                className="p-2"
                            />
                            <img
                                src={require(`../assets/images/Landing/1.png`).default}
                                alt=""
                                height="300vh"
                                className="p-2"
                            />
                        </div>
                    </div>
            </>
            ) : (
                <>
                    <div className="auth-fail">Please login or signup to view your dashboard!</div>
                </>
            )}    
        </section>
    );
};

export default Dashboard;