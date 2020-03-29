import React from "react"
import { shallow } from "enzyme"
import {findByAttr} from "./../../../utils/index"
import Header from "./index"

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />)
    return component
}

describe("Header", () => {

    let component;
    beforeEach(() => {
        component = setUp()
    })
    it("Should render without any error", () => {
        // const component = shallow(<Header />)
        // console.log(component.debug())
        const wrapper = findByAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1);
    })
    it("Should render a logo Image", () => {
        // const component = shallow(<Header />)
        // console.log(component.debug())
        const wrapper = findByAttr(component, 'logoimage')
        expect(wrapper.length).toBe(1);
    })
})
