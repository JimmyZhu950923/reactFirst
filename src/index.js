import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Purememo from './Purememo'
// import Composition from './Composition'
// import HOC from './HOC/HOC'
// import Context2 from './Context2'
// import Hook7 from './HOOK/Hook7'
import FirstRedux from './REDUX/FirstRedux'
// import store from './REDUX/Store'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {firstReducer} from './REDUX/count.redux'

const store = createStore(firstReducer, applyMiddleware(thunk, logger));

ReactDOM.render(<Provider store={store}><FirstRedux></FirstRedux></Provider>, document.getElementById('root'));

// const render = () => {
//     ReactDOM.render(<FirstRedux/>, document.getElementById('root'));
// }
// render();

// store.subscribe(render);
