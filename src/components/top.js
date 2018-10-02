import React, { Component } from 'react';
import {Navbar, NavItem} from "react-materialize";

class Top extends Component{
    render(){
        return(
                <Navbar className="green accent-4" brand='Resutoran' style={{'padding': '0 10vw'}} right>
                <NavItem className='bigLetters' href='/'>Home</NavItem>
                <NavItem className='bigLetters' href='about'>About</NavItem>
                <NavItem className='bigLetters' href='gallery'>Gallery</NavItem>
                </Navbar>
        );
    }
}

export default Top;