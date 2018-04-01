import { createStore, applyMiddleware } from 'redux';
import stereoApp from '../reducers/stereo-reducers';
import ReduxThunk from 'redux-thunk';

const stereoStore = createStore(
    stereoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default stereoStore;