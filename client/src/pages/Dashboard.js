import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  useMutation } from '@apollo/react-hooks';
import { Button, Modal, Form } from 'react-bootstrap';
import { ADD_DAILY_STATS } from '../utils/mutations';

import Auth from '../utils/auth';

const Dashboard = props => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modalState, setModalState] = useState({ bodyWeight: 0, waistCircumference: 0 });
    const [addDayLog] = useMutation(ADD_DAILY_STATS);
    const modalChange = event => {
        const { name, value } = event.target;

        setModalState({
            ...modalState,
            [name]: parseInt(value)
        });    
    }
    const modalSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await addDayLog({
                variables: { ...modalState }
            });

            console.log({...modalState})
            console.log(data);
            return data;
        } catch (e) {
            console.error(e)
        }
    }

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
                  <Modal.Title>Enter Your Measurments!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={modalSubmit}>
                        <Form.Group>
                            <Form.Label>Body Weight</Form.Label>
                            <Form.Control type="input" placeholder="Body Weight" name="bodyWeight" onChange={modalChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Waist Circumference</Form.Label>
                            <Form.Control type="input" placeholder="Wiast Circumference" name="waistCircumference" onChange={modalChange} />
                        </Form.Group>
                        <Button id="modalButton-submit" type="submit">
                            Submit Your Measurments
                        </Button>
                        <Button id="modalButton-close" onClick={handleClose}>
                            Close
                        </Button> 
                    </Form>
                </Modal.Body>
              </Modal>
            )}  
        </section>
    );
};

export default Dashboard;