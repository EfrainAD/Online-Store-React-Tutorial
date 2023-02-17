import { compose, createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { rootReducer } from './root-reduceer'

const persistConfig = {
     key: 'root',
     storage,
     blacklist: ['cart'],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleWares = 
[
     process.env.NODE_ENV !== 'production' && logger,
     thunk,
].filter(Boolean)

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__) || compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

// export const store = createStore(rootReducer)
export const store = createStore(persistedReducer, undefined, composedEnhancers)

export const persistor = persistStore(store)