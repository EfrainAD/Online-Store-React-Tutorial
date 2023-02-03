import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
// import { createLogger } from 'redux-logger'

import { rootReducer } from './root-reduceer'

const middleWares = [logger]
const composedEmhancers = compose(applyMiddleware(...middleWares))

// export const store = createStore(rootReducer)
export const store = createStore(rootReducer, undefined, composedEmhancers)