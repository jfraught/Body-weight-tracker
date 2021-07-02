import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { Button, Modal } from 'react-bootstrap';
import { ADD_DAILY_STATS } from '../utils/mutations';
import Auth from '../utils/auth';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let date = [];
    const formatDate = (date) => {
        let dd = date.getDate();
        let mm = date.getMonth()+1;
        if(dd<10) {dd='0'+dd};
        if(mm<10) {mm='0'+mm};
        date = mm+'/'+dd;
        return date;
    }
    const dateHandler = () => {
        for (let i = 0; i < 7; i++) {
            let d = new Date();
            d.setDate(d.getDate() - i);
            date.push(formatDate(d))
        }
        date.reverse();
        return(date);
    }

    const [modalState, setModalState] = useState({ bodyWeight: 0, waistCircumference: 0 });
    const[addDayLog, { error }] = useMutation(ADD_DAILY_STATS);

    const modalChange = event => {
        const { name, value } = event.target;

        setModalState({
            ...modalState,
            [name]: value
        });    
    }

    const modalSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await addDayLog({
                variables: { ...modalState }
            });
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }

    dateHandler();

    return (
        <section className="dashboard">
            {Auth.loggedIn() ? (
                <>
                    <h2>Dashboard</h2>
            
                    <div>
                        <ul>
                            <li>Pounds From Goal: <span>**</span></li>
                            <li>Inches From Goal: <span>*</span></li>
                            <li>BMI Points From Goal: <span>**</span></li>
                        </ul>
            
                        <button type="button" onClick={handleShow}>
                            Add Daily Stats
                        </button>
                    </div>
            
                    <div className="mt-5">
                        <h3>Body Weight - Last 7 days</h3>
            
                        <table>
                            <thead>
                                <tr>
                                    <th>06/25</th>
                                    <th>06/26</th>
                                    <th>06/27</th>
                                    <th>06/28</th>
                                    <th>06/29</th>
                                    <th>06/30</th>
                                    <th>Today</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Today</td>
                                </tr>
                            </tbody>
                        </table>
                    </div><br/>
            
                    <div>
                        <h3>Waist Circumference - Last 7 days</h3>
            
                        <table>
                            <thead>
                                <tr>
                                    <th>06/25</th>
                                    <th>06/26</th>
                                    <th>06/27</th>
                                    <th>06/28</th>
                                    <th>06/29</th>
                                    <th>06/30</th>
                                    <th>Today</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Today</td>
                                </tr>
                            </tbody>
                        </table>
                    </div><br/>
            
                    <div>
                        <h3>BMI - Last 7 days</h3>
            
                        <table>
                            <thead>
                                <tr>
                                    <th>06/25</th>
                                    <th>06/26</th>
                                    <th>06/27</th>
                                    <th>06/28</th>
                                    <th>06/29</th>
                                    <th>06/30</th>
                                    <th>Today</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Today</td>
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
                    <div className="auth-fail">
                        Please login or signup to view your dashboard!
                        <div>
                            <Link className="px-3 auth-link" to="/login">Login</Link>
                            <Link className="px-3 auth-link" to="/">Signup</Link>
                        </div>
                    </div>
                </>
            )}  

            {show && (
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                animation={false}
              >
                <Modal.Header>
                  <Modal.Title>Enter Your Measurments for {date[6]}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={modalSubmit}>
                        <div>
                            <label htmlFor="weight" className="signup-label">Weight: </label>
                            <input type="number" name="weight" placeholder="weight" id="weight" className="form-input" onChange={modalChange}/>
                        </div> 

                        <div>
                            <label htmlFor="waist" className="signup-label">Waist Circumference: </label>
                            <input type="number" name="waist" placeholder="waist circumference" id="waist" className="form-input" onChange={modalChange}/>
                        </div> 
                        <Button id="modalButton-submit" type="submit">Submit My Measurments</Button>  
                        <Button id="modalButton-close" onClick={handleClose}>
                            Close
                        </Button> 
                    </form>
                </Modal.Body>
              </Modal>
            )}  
        </section>
    );
};

export default Dashboard;