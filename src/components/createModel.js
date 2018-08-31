import React, { Component } from 'react';
import {Row, Input, NavItem, Button, Dropdown} from 'react-materialize';
import PropTypes from 'prop-types';
import {addModule} from '../actions/index';
import {reduxForm} from 'redux-form';
import {bindActionCreators} from 'redux';

class CreateModel extends Component{
    static contextTypes = {
        router : PropTypes.object
    };

    onSubmit(props){
        this.props.addModule(props)
    };

    render(){
        const { fields: {name, email, bounty, accuracy } , handleSubmit} = this.props;

        return(
            <div>
                <h4 className="black-text upperIt" style={{'textAlign': 'center', 'fontFamily': '\'Work Sans\', sans-serif'}} >CREATE MODEL</h4>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} >
                    <Row style={{'width':'80%', 'margin':'30px 10%' }} >
                        <Input s={12} id="name" label="Model Name" {...name} />
                        <Input id="email" type="email" label="Email" s={12} {...email}/>
                        <Input s={12} type='select' label="Materialize Select" defaultValue='2'>
                            <option value='1'>Option 1</option>
                            <option value='2'>Option 2</option>
                            <option value='3'>Option 3</option>
                        </Input>
                        <Input type="file" label="Upload File 1" s={12} id="upload1"/>
                        <Input type="file" label="Upload File 2" s={12} id="upload2" />
                        <Input id="bounty" placeholder="Set Bounty" s={12} type='textarea' {...bounty} />
                        <Input id="accuracy" s={12} placeholder="Set Accuracy" type='textarea' {...accuracy}/>
                        <div style={{'textAlign':'right'}} >
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                        </div>
                    </Row>
                </form>
            </div>
        );
    }
}


export default reduxForm({
    form : "CreateModelForm",
    fields: ['name', 'email', 'bounty', 'accuracy']
}, null, {addModule}) (CreateModel);