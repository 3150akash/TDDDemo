import moxios from "moxios"
import { testStore } from "../../utils"
import { fetchData } from "../actions/index"

describe("fetch post action", () => {
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test("store is update correctly", () => {
        const expectedState = [{
            title: "Example Title 1",
            description: "Example Description 1"
        },
        {
            title: "Example Title 1",
            description: "Example Description 1"
        },
        {
            title: "Example Title 1",
            description: "Example Description 1"
        }]

        const store = testStore()

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            })
        })

        return store.dispatch(fetchData()).then(() => {
            const newState = store.getState();
            expect(newState.post).toBe(expectedState)
        })
    })
})