import { addModule} from '../actions';

const INITIAL_STATE = { all: [ ], post: null };

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_MODULE' : {
            console.log(...state)
            return {...state, module : action.payload.data}}
        default : return state;
    }
};