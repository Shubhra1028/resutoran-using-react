import {reduxForm} from 'redux-form';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {makeReservation} from '../../actions/index';
import { Row, Input, Button, Col, Modal } from "react-materialize";

class HomeReservations extends Component{
    static contextTypes = {
        router : PropTypes.object
    };

    onSubmit(props){
        this.props.makeReservation(props)
        //   .then((()=>{ 
        //       this.context.router.push('/')
        //    }))
    };

    render(){
        const { fields: {name, email, phone, date, timing, numberOfPeople } , handleSubmit} = this.props;

        return (
            <div className='container containerMargins' id="reservationForm">
                <Row>
                    <Col s={4} className='shopBoard'>
                        <div className='black white-text'>
                            <h1 style={{'fontSize':'1.5em', 'color': 'antiquewhite'}}>Opening Hours</h1>
                            <i class="fas fa-utensils"></i>
                            <p style={{'color': 'antiquewhite'}}>MONDAY - FRIDAY</p>
                            <p>11:00 AM to 3:00 pM</p>
                            <p>7:00 pM to 10:00 pM</p>
                            <br />
                            <p style={{'color': 'antiquewhite'}}>SATURDAY - SUNDAY</p>
                            <p>11:00 AM to 3:00 pM</p>
                            <p>7:00 pM to 11:00 pM</p>
                            <br />
                            <p style={{'color': 'antiquewhite'}}>+120-9090-800</p>
                        </div>
                    </Col>
                    <Col s={7}>
                        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                        <h1 style={{'fontSize':'1.5em'}}>Personal Information</h1>
                        <Input s={6} className={`${name.touched && name.invalid ? '' : ''}`} label="Name" {...name} />
                        <Input s={6} type='email' className={`${email.touched && email.invalid ? '' : ''}`} label="Email ID" {...email} type='email' />
                        <Input s={6} pattern="[0-9]{10}" className={`${phone.touched && phone.invalid ? '' : ''}`} label="Telephone" validate type='tel' {...phone}></Input>
                        <Input s={6} className={`${date.touched && date.invalid ? '' : ''}`} label="Date" name='on' type='date' {...date} />
                        <Input s={6} className={`${timing.touched && timing.invalid ? '' : ''}`} label="Timing" name='on' type='time' {...timing} />
                        <Input s={6} min={1} className={`${numberOfPeople.touched && numberOfPeople.invalid ? '' : 'eror'}`} label="Number Of people" type='number' {...numberOfPeople} />
                        <Modal
                        header='Reservation Confirmed'
                        trigger={<Button className="green accent-4" type="submit">Reserve</Button>}>
                        <p>You will shortly get a call from us about your reservation.</p>
                        </Modal>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.name){
        errors.name='Enter a name';
    }if(!values.email){
        errors.email='Enter a email id';
    }if(!values.phone){
        errors.phone='Enter a Contact Number';
    }if(!values.date){
        errors.date='Enter a Date';
    }if(!values.timing){
        errors.timing='Enter a Time';
    }if(!values.numberOfPeople){
        errors.numberOfPeople='Enter a Number of people';
    }

    return errors;
}

export default reduxForm({
    form : "PostsNewForm",
    fields: ['name', 'email', 'phone', 'date', 'timing', 'numberOfPeople'],
    validate
}, null, {makeReservation}) (HomeReservations);