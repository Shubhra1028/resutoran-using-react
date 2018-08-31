import { combineReducers } from 'redux';
import AddModule from './reducer_addModule';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  module : AddModule,
  form : formReducer
});

export default rootReducer;
