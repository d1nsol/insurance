import { combineReducers } from 'redux';
import user from './user_reducer';
import insurance from './insurance_reducer';

const rootReducer = combineReducers({
    user,
    insurance
});

export default rootReducer;