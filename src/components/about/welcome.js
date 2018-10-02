import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';

class Welcome extends Component{
    render(){
        return(
            <div className='container giveMargin'>
                <h3 style={{'textAlign':'center'}}>Welcome To Our Restaurant</h3>
                <p style={{'textAlign':'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='bgImg' style={{'backgroundImage': 'url("https://www.scandichotels.com/imageVault/publishedmedia/8ngmvcvxgcvkqibk1qqm/Scandic-Aarhus-City-Interior-restaurant-The-Grill0.jpg")', 'width':'100%', 'height':'40vh'}} ></div>
                <Row className='history'>
                    <Col s={3}>
                        <h3>Our History</h3>
                    </Col>
                    <Col s={3}>
                        <h3>2017-2015</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Col s={3}>
                        <h3>2014-2012</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Col s={3}>
                        <h3>2011-2008</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Welcome;