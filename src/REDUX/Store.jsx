import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {firstReducer} from './count.redux'

// const firstReducer = (state=0, aciton) => {
//     switch(aciton.type) {
//         case "add":
//             return state + 1;
//         case "minus":
//             return state - 1;
//         default:
//             return state;
//     }
// }

const store = createStore(firstReducer, applyMiddleware(thunk, logger));

export default store;
