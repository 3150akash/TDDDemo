import { createStore, applyMiddleware } from "redux";
import RootReducer from "./reducers"
import reduxthunk from "redux-thunk"

const middleWare = [reduxthunk]

const createStoreWithMiddleWare = applyMiddleware(...middleWare)(createStore)

export const store = createStoreWithMiddleWare(RootReducer);