import { types } from "../../actions/types"
import postReducer from "../../reducers/posts/reducer"

describe("Post Reducer", () => {
    it("should return default state", () => {
        const newState = postReducer(undefined, {})
        expect(newState).toEqual([]);
    });

    it("should return a new state if type is defined", () => {
        const posts = [{ title: "post1" }, { title: "post2" }, { title: "post3" }]
        const newState = postReducer(undefined, {
            type: types.GET_POSTS,
            payLoads: posts
        })
        expect(newState).toEqual(posts)
    })
})
