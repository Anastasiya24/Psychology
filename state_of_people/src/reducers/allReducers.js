import { combineReducers } from 'redux';
import Face from './faceReducer';

//consist of reducers
const allReducers = combineReducers({
    facePage: Face
});

export default allReducers;
