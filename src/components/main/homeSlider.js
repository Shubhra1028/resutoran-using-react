import React, { Component } from 'react';
import {Button, Carousel} from 'react-materialize';

class HomeSlider extends Component{
    render(){
        return(
            <div>
                <Carousel fixedItem={
                    <div className='container' style={{'textAlign' : 'left'}}>
                        <h2>Resutoran</h2>
                        <Button id="makeReservebtn" className='green accent-4' waves='light'>RESERVE YOUR TABLE</Button>
                    </div>
                } options={{ fullWidth: true}}>
                <div className='bgImg' style={{'backgroundImage':'url("http://www.mooseandcarrots.com/wp-content/uploads/2017/09/food-photography-banner.jpg")'}}>
                    <div className='container'>
                    <h2>Restaurant Landing Page</h2>
                    <p className='white-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div></div>
                <div className='amber bgImg' style={{'backgroundImage':'url("http://www.presagepro.com/sy-photos/2014/08/22/16/large_1d83f2a22_JAK_8210Sized.jpg")'}}>
                    <div className='container'>
                    <h2>Restaurant Landing Page</h2>
                    <p className='white-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div></div>
                <div className='green bgImg' style={{'backgroundImage':'url("https://dyazafryan.files.wordpress.com/2015/07/dsc03360.jpg")'}}>
                    <div className='container'>
                    <h2>Restaurant Landing Page</h2>
                    <p className='white-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div></div>
                <div className='blue bgImg' style={{'backgroundImage':'url("https://png.pngtree.com/back_origin_pic/04/05/57/029eb5ececde9857d07e85f4fc6ff7b8.jpg")'}}>
                    <div className='container'>
                    <h2>Restaurant Landing Page</h2>
                    <p className='white-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div></div>
                </Carousel>
            </div>
        );
    }
}

export default HomeSlider;