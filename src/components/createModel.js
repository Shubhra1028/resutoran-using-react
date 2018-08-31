import React, { Component } from 'react';
import {Row, Input, NavItem, Button, Dropdown} from 'react-materialize';

class CreateModel extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email: '',
            bounty: '',
            accuracy: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        let { target: { id, value } } = event;
        this.setState({ [id]: value})
    }

    onFormSubmit(event){
        event.preventDefault();
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <h4 className="black-text upperIt" style={{'textAlign': 'center', 'fontFamily': '\'Work Sans\', sans-serif'}} >CREATE MODEL</h4>
                <form onSubmit={this.onFormSubmit} >
                    <Row style={{'width':'80%', 'margin':'30px 10%' }} >
                        <Input s={12} id="name" label="Model Name" value={this.state.name} onChange={this.onInputChange} />
                        <Input id="email" type="email" label="Email" s={12} value={this.state.email} onChange={this.onInputChange}/>
                        <Input s={12} type='select' label="Materialize Select" defaultValue='2'>
                            <option value='1'>Option 1</option>
                            <option value='2'>Option 2</option>
                            <option value='3'>Option 3</option>
                        </Input>
                        <Input type="file" label="Upload File 1" s={12} id="upload1" onChange={this.onInputChange}/>
                        <Input type="file" label="Upload File 2" s={12} id="upload2" onChange={this.onInputChange} />
                        <Input id="bounty" placeholder="Set Bounty" s={12} type='textarea' value={this.state.bounty} onChange={this.onInputChange}/>
                        <Input id="accuracy" s={12} placeholder="Set Accuracy" type='textarea' value={this.state.accuracy} onChange={this.onInputChange}/>
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

export default CreateModel;