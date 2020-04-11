import React from "react";
import { testStore, findByAttr } from "../utils"
import { shallow } from "enzyme"
import App from "./App"

const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive()
    console.log(wrapper.debug())
    return wrapper;
}

describe("App component", () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: "Example Title 1",
                body: "Example Description 1"
            },
            {
                title: "Example Title 1",
                body: "Example Description 1"
            },
            {
                title: "Example Title 1",
                body: "Example Description 1"
            }]
        }
        wrapper = setUp(initialState)
    })
    it("should render without error", () => {
        const component = findByAttr(wrapper, "appComponent");
        expect(component.length).toBe(1)
    })
})