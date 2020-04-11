import React from "react"
import { shallow } from "enzyme"
import { checkProps, findByAttr } from "../../../utils"
import ListItem from "./index.js"

describe("List Item Component", () => {
    describe("checking propType", () => {
        it("should render without warning", () => {
            const listitemProps = {
                title: "my test",
                desc: "my description"
            }
            const listItemError = checkProps(ListItem, listitemProps)
            expect(listItemError).toBeUndefined()
        })
    })

    describe("it should render without any error", () => {
        let wrapper;
        const props = {
            title: "my test",
            desc: "my description"
        }
        beforeEach(() => {
            wrapper = shallow(<ListItem {...props} />)
        })

        it("should render a list item", () => {
            const listItem = findByAttr(wrapper, "listItemComponent")
            expect(listItem.length).toBe(1)
        })

        it("should render a title", () => {
            const title = findByAttr(wrapper, "componentTitle")
            expect(title.length).toBe(1);
        })

        it("should render a description", () => {
            const description = findByAttr(wrapper, "componentDesc");
            expect(description.length).toBe(1);
        })
    })
})



describe("Should not render", () => {
    let wrapper;
    const props = {
        description: "test description"
    }
    beforeEach(() => {
        wrapper = shallow(<ListItem {...props} />)
    })

    it("should not render lisItem", () => {
        const listItem = findByAttr(wrapper, "listItemComponent");
        expect(listItem.length).toBe(0);
    })
})