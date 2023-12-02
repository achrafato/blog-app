//redux
import {createStore} from 'redux'
import { applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
//reducer
import PostReducer from '../reducers/PostReducer'


export const store = createStore(PostReducer,compose(applyMiddleware(thunk),composeWithDevTools()))