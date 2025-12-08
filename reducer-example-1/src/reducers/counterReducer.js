export function counterReducer(state, action) {

    switch(action.type) {
        case "increment":
            return state + (action.value ?? 1)
        case "decrement":
            return state - (action.value ?? 1)
        default:
            return state
    }
}
