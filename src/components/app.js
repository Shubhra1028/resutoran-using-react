import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import Top from './top';
import PageFooter from './footer';

export default class App extends Component {
  render() {
    return (
      <div className="gridContent">
      <Row>
        <Col s={12} className='grid-example' style={{'padding':'0'}}><Top /></Col>
        <Col s={12} className='grid-example maindiv'>{this.props.children}</Col>
        <Col s={12} className='grid-example' style={{'padding':'0'}}><PageFooter /></Col>
      </Row>
      </div>
    );
  }
}
