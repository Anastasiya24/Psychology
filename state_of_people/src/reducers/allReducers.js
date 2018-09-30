import { combineReducers } from 'redux';
import Face from './faceReducer';
import Eyes from './eyesReducer';
import Hands from './handsReducer';
import Legs from './legsReducer';
import Palms from './palmsReducer';
import Shoulders from './shouldersReducer'

//consist of reducers
const allReducers = combineReducers({
    facePage: Face,
    eyesPage: Eyes,
    handsPage: Hands,
    legsPage: Legs,
    palmsPage: Palms,
    shouldersPage: Shoulders
});

export default allReducers;
