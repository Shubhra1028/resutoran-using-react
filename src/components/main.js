import React, { Component } from 'react';
import HomeSlider from './main/homeSlider';
import HomeMenu from './main/homeMenu';
import HomeSpecial from './main/homeSpecial';
import CustomerReviews from './main/homeCustomerReviews';
import HomeReservations from './main/homeReservation';

class Main extends Component{
    render(){
        return(
            <div>
                <HomeSlider />
                <HomeMenu />
                <HomeSpecial />
                <CustomerReviews />
                <HomeReservations />
            </div>
        );
    }
}

export default Main;