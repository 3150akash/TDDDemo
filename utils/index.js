import { checkPropTypes } from "prop-types"
export const findByAttr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propError = checkPropTypes(component.propTypes,expectedProps, "props", component.name)
    return propError
}