import React, { Component } from 'react';
import {Navbar, NavItem} from "react-materialize";

class Top extends Component{
    render(){
        return(
                <Navbar className="teal darken-1" brand='Block AI' style={{'padding': '0 10vw'}} right>
                <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
                <NavItem href='components.html'>Components</NavItem>
                </Navbar>
        );
    }
}

export default Top;