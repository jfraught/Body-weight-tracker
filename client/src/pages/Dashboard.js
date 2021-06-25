import React from 'react';

const Dashboard = () => {
    return (
        <section className="dashboard">
            <h2>Welcome<span> Name Here!</span></h2>

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
                    <tr>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                    </tr>
                    <tr>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                    </tr>
                </table>
            </div><br/>

            <div>
                <h3>Waist Circumference - Last 7 days</h3>

                <table>
                    <tr>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                    </tr>
                    <tr>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                    </tr>
                </table>
            </div><br/>

            <div>
                <h3>BMI - Last 7 days</h3>

                <table>
                    <tr>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                        <th>Day</th>
                    </tr>
                    <tr>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                        <td>Measurment</td>
                    </tr>
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
        </section>
    );
};

export default Dashboard;