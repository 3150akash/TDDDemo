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
    const props = {
        buttonText: "Some Text",
        emitEvent: () => {

        }
    };
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SharedButton {...props} />)
    })

    it("should render a button", () => {
        const button = findByAttr(wrapper, 'buttonComponent');
        expect(button.length).toBe(1);
    })
})