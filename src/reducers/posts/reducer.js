import { types } from "../../actions/types"
export default (state = [], action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return action.payLoads
        default:
            return state
    }
}