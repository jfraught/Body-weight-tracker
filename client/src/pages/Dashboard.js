import React, { useState } from 'react';
import { Redirect } from 'react-router-dom'
import { useMutation } from '@apollo/react-hooks';
import { Button, Modal } from 'react-bootstrap';
import { ADD_DAILY_STATS } from '../utils/mutations';
import Auth from '../utils/auth';

const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modalState, setModalState] = useState({ weight: '', waist: '' });
    const [addDayLog, { error }] = useMutation(ADD_DAILY_STATS)

    let date = [];
    let dailyStats=[];

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

    const modalSubmit = async e => {
        e.preventDefault();
        
        try {
            const { data } = await addDayLog({
                variables: { ...modalState }
            });

            let dailyStatsInput = {
                date: date[6],
                weight: data.weight,
                waist: data.waist, 
                BMI: ''
            };

            //console.log(dailyStats);

            dailyStats.push(dailyStatsInput);

            setModalState({ weight: '', waist: '' })
        } catch (err) {
            console.log(err);
        }

        handleClose();
    }

    dateHandler();

    return (
        <section className="dashboard">
            {Auth.loggedIn() ? (
                <>
                    <h2>Dashboard</h2>
            
                    <div>
                        <ul>
                            <li>Pounds From Goal: <span>420</span></li>
                            <li>Inches From Goal: <span>69</span></li>
                            <li>BMI Points From Goal: <span>789</span></li>
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
                    <Redirect to="/" />
                    {/*<div className="auth-fail">Please login or signup to view your dashboard!</div>*/}
                </>
            )}  

            {show && (
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header>
                  <Modal.Title>Enter Your Measurments for {date[6]}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div>
                            <label htmlFor="weight" className="signup-label">Weight: </label>
                            <input type="number" name="weight" placeholder="weight" id="weight" className="form-input"/>
                        </div> 

                        <div>
                            <label htmlFor="waist" className="signup-label">Waist Circumference: </label>
                            <input type="number" name="waist" placeholder="waist circumference"  id="waist" className="form-input"/>
                        </div>    
                    </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button id="modalButton-close" onClick={handleClose}>
                    Close
                  </Button>
                  <Button id="modalButton-submit" onClick={modalSubmit}>Submit My Measurments</Button>
                </Modal.Footer>
              </Modal>
            )}  
        </section>
    );
};

export default Dashboard;