import axios from 'axios';

export function addModule(props){
    const request = axios.post('http://0.0.0:/add_module', props);
    console.log(request)
    return{
        type : 'ADD_MODULE',
        payload : request
    };
};

