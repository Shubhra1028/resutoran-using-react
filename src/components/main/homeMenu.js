import React, {Component} from 'react';
import {connect} from 'react-redux';

class HomeMenu extends Component{
    renderList(mainCategory){
        console.log(mainCategory)
        return mainCategory.map((item) => {
            return (
                <li 
                key={item.name} 
                className="list-group-item black-text">
                    <img className='imgUrlAvatar' src={item.imgUrl} alt='pic' />
                    <span className='bigLetters' >{item.name}</span>
                    <span className='itemprice'>{item.price}</span>
                </li>
            );
        });
    }
    renderStarters(){
        return this.renderList(this.props.starters);
    }

    renderSoup(){
        return this.renderList(this.props.soup);
    }

    renderMainCourse(){
        return this.renderList(this.props.mainCourse);
    }

    render(){
        return(
            <div className='container containerMargins menuHome'>
                <h1 className='black-text' style={{'textAlign' : 'center'}}>Our Menu</h1>
                <ul className="list-group col-sm-8 col-md-4">
                <h3 className='black-text menuHomeHead'>Starters</h3>
                {this.renderStarters()}
                </ul>
                <ul className="list-group col-sm-8 col-md-4">
                <h3 className='black-text menuHomeHead'>Soup</h3>
                {this.renderSoup()}
                </ul>
                <ul className="list-group col-sm-8 col-md-4">
                <h3 className='black-text menuHomeHead'>Main Course</h3>
                {this.renderMainCourse()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        starters : state.starter,
        soup : state.soup,
        mainCourse: state.mainCourse
    };
}

export default connect (mapStateToProps) (HomeMenu);