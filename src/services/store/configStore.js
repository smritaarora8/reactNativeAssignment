import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import weatherReport from './Profile/reducer';

const initialState = {};
const middleware = [thunk];
const composedEnhancer = compose(applyMiddleware(...middleware));

const rootReducer = combineReducers({
  weatherReport,
});

const configStore = () => {
  return createStore(rootReducer, initialState, composedEnhancer);
};

export default configStore;
