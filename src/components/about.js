import React, { Component } from 'react';
import Welcome from './about/welcome';
import Facility from './about/facility';
import HighClassFacility from './about/highClassFacility';
import Chef from './about/chef';

class About extends Component{
    render(){
        return(
            <div>
                <div className='outerBox bgImg' style={{"backgroundImage": "url('https://nisantasmeyhanesi.com/wp-content/uploads/2018/08/bck01-1030x644.jpg')"}}>
                    <div className='innerBox'>
                        <h1 className='bigLetters white-text' >About</h1>
                    </div>
                </div>
                <Welcome />
                <Facility />
                <HighClassFacility />
                <Chef />
            </div>
        );
    }
}

export default About;