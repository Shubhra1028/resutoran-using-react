import React, {Component} from 'react';
import {connect} from 'react-redux';

class HomeSpecial extends Component{
    renderSpecials(){
        return this.props.special.map((item) => {
            return (
                <div 
                key={item.name} 
                className="col-sm-3 bgImg" style={{'backgroundImage': `url("${item.imgUrl}")`, 'position':'relative' }}>
                <div className='specialMenuDiv'>
                    <h3>{item.name}</h3>
                    <p> {item.about} </p>
                    <p> {item.price} </p>
                </div>
                </div>
            );
        });
    }

    render(){
        return(
            <div className='specialMenuHome'>
                <h1 className='black-text' style={{'textAlign' : 'center'}}>Our Specials</h1>
                <div>
                {this.renderSpecials()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        special : state.special
    };
}

export default connect (mapStateToProps) (HomeSpecial);