import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { Button, Modal, Form } from 'react-bootstrap';
import { ADD_DAILY_STATS } from '../../utils/mutations';
import { GET_DAYLOGS } from '../../utils/queries';
import Auth from '../../utils/auth';


const StatsModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const date = [];
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

    const [modalState, setModalState] = useState({ bodyWeight: 0, waistCircumference: 0, display_name: " " });
    const[addDayLog] = useMutation(ADD_DAILY_STATS);
    const [pageState, setPageState] = useState( " " )
    const { loading, data } = useQuery(GET_DAYLOGS);

    const modalChange = event => {
        const { name, naMe, value, value2 } = event.target;

        setModalState({
            ...modalState,
            [name]: parseInt(value),
            [naMe]: value2
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
                       
            
                 <button type="button" onClick={handleShow}>
                            Add Daily Stats
                        </button>
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
                    <Form onSubmit={modalSubmit}>
                        <Form.Group>
                            <Form.Label>Body Weight</Form.Label>
                            <Form.Control type="input" placeholder="Body Weight" name="bodyWeight" onChange={modalChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Waist Circumference</Form.Label>
                            <Form.Control type="input" placeholder="Wiast Circumference" name="waistCircumference" onChange={modalChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="input" placeholder="Your Name" name="display_name" onChange={modalChange} />
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
            
            <div>
            <p>
                I'm a super cool dude
            </p>
            </div> 
        </section>
        
    );

  
       
    
};

export default StatsModal;