import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import Top from './top';
import Side from './sidenavbar';

export default class App extends Component {
  render() {
    return (
      <div className="gridContent">
      <Row>
        <Col s={12} className='grid-example' style={{'padding':'0'}}><Top /></Col>
        <Col s={3} className='grid-example maindiv'><Side /></Col>
        <Col s={9} className='grid-example maindiv'>{this.props.children}</Col>
      </Row>
      </div>
    );
  }
}
