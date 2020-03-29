import React from "react"
import { shallow } from "enzyme"
import Headline from "./index"

import { findByAttr } from "../../../utils"

const setup = (props) => {
    const wrapper = shallow(<Headline {...props} />)
    return wrapper;
}

describe("Headline Component", () => {
    describe("with Header", () => {
        let wrapper;
        beforeEach(() => {
            let props = {
                header: "test Header",
                desc: "test Desc"
            }
            wrapper = setup(props)
        })

        it("Should be displayed with out any error", () => {
            let Component = findByAttr(wrapper, 'HeadlineComponent')
            expect(Component.length).toBe(1)
        })
        it("Should have Heading", () => {
            let Component = findByAttr(wrapper, 'header')
            expect(Component.length).toBe(1)
        })
        it("Should have Description", () => {
            let Component = findByAttr(wrapper, 'desc')
            expect(Component.length).toBe(1)
        })
    })
    describe("Without Header", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup()
        })
        it("Should be displayed with out any error", () => {
            let Component = findByAttr(wrapper, 'HeadlineComponent')
            expect(Component.length).toBe(0)
        })
    })
})