import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Slider, Slide} from 'react-materialize';

class CustomerReviews extends Component{
    renderReviews(){
        return this.props.reviews.map((item) => {
            return (
                <Slide
                    key={item.name}
                    src=""
                    title={item.name}
                    >
                    {item.review}
                </Slide>
            );
        });
    }

    render(){
        return(
            <div className='sliderContainer'>
                <Slider className='teal' options={{ indicators: false}}>
                    {this.renderReviews()}
                </Slider>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        reviews : state.reviews
    };
}

export default connect (mapStateToProps) (CustomerReviews);