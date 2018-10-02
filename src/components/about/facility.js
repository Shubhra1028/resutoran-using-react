import React, { Component } from 'react';

class Facility extends Component{
    render(){
        return(
            <div className='grey lighten-2' style={{'padding':'0.5in'}}>
                <div className='container'>
                    <div className='col-sm-6' >
                        <h4>
                            We provide the best Facility 
                        </h4>
                        <ul>
                            <li>Free Wifi Internet</li>
                            <li>Free Secure parking</li>
                            <li>Secure Yard For Bicycle</li>
                            <li>Interior</li>
                            <li>Seating capacity of 164 people at the same time</li>
                        </ul>
                    </div>
                    <div className='col-sm-5 bgImg' style={{'height':'2.5in', 'width':'46%','marginLeft':'0.25in', 'backgroundImage':'url("http://www.bestinteriordesigners.eu/wp-content/uploads/2015/06/Best-Interior-Designers-Top-restaurant-designs-Blacksheep-Nandos-in-Ashford-2.jpg")'}}></div>
                </div>
            </div>
        );
    }
}

export default Facility;