import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import RootReducer from './rootReducer'

import thunk from 'redux-thunk'

const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type rootStore = ReturnType<typeof RootReducer>

export default store