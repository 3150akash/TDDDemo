import { checkPropTypes } from "prop-types"
import { createStore, applyMiddleware } from "redux";
import RootReducer from "../src/reducers"
import { middleWare } from "./../src/createStore"
export const findByAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propError = checkPropTypes(component.propTypes, expectedProps, "props", component.name)
    return propError
}

export const testStore = (initialState) => {
    const createStoreWithMiddleWare = applyMiddleware(...middleWare)(createStore)
    return createStoreWithMiddleWare(RootReducer, initialState)
}