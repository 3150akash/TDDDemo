import React from "react"
import { shallow } from "enzyme"
import { findByAttr, checkProps } from "../../../utils"
import SharedButton from "./index"

describe("checking PropTypes", () => {
    it("should not throw any warning", () => {
        const expectedProps = {
            buttonText: "Some Text",
            emitEvent: () => {

            }
        };
        const propsError = checkProps(SharedButton, expectedProps)
        expect(propsError).toBeUndefined();
    })
})

describe("Renders", () => {
    let mockFunc;
    let wrapper;
    beforeEach(() => {
        mockFunc = jest.fn()
        const props = {
            buttonText: "Some Text",
            emitEvent: mockFunc
        };
        wrapper = shallow(<SharedButton {...props} />)
    })

    it("should render a button", () => {
        const button = findByAttr(wrapper, 'buttonComponent');
        expect(button.length).toBe(1);
    })

    it("should emit a callback Event", () => {
        const button = findByAttr(wrapper, 'buttonComponent');
        button.simulate("click")
        const callback= mockFunc.mock.calls.length;
        expect(callback).toBe(1)
    })
})