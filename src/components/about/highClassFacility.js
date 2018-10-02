import React, { Component } from 'react';
import {Row, Col, MediaBox} from 'react-materialize';

class HighClassFacility extends Component{
    render(){
        return(
            <div className='container giveMargin'>
                <h3 style={{'textAlign':'center'}}>High Class Professional Service</h3>
                <p style={{'textAlign':'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <Row className='highclassFac'>
                    <Col s={4}>
                        <MediaBox src="https://italianrestaurants-stlouis.com/wp-content/uploads/2016/09/catering-1.jpg" caption="Catering" width="90%"/>
                        <p style={{'width':'80%', 'textAlign':'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Col s={4}>
                        <MediaBox src="http://www.lamadeleine.com.ar/wp-content/uploads/2014/06/empty-glass-dining-table-image-8-1018x683.jpg" caption="Party" width="90%"/>
                        <p style={{'width':'80%', 'textAlign':'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Col s={4}>
                        <MediaBox src="http://www.royalrestaurantva.com/wp-content/uploads/2014/07/Royal-Restaurant-reservations.jpg" caption="Private Dining" width="90%"/>
                        <p style={{'width':'80%', 'textAlign':'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HighClassFacility;