import { combineReducers } from 'redux';
import homestarter from './reducer_HomeMenu_Starter';
import homeSoup from './reducer_HomeMenu_Soup';
import homeMainCourse from './reducer_HomeMenu_MainCourse';
import homeSpecial from './reducer_HomeMenu_Special';
import customerreviews from './reducer_Home_Reviews';
import {reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
  starter : homestarter,
  soup : homeSoup,
  mainCourse : homeMainCourse,
  special : homeSpecial,
  reviews : customerreviews,
  form : formReducer
});

export default rootReducer;
