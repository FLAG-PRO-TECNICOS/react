export function fruitBasketReducer(state, action) {
    switch(action.type) {
        case "ADD_FRUIT":
            if (state.includes(action.payload)) {
                return state
            } else {
                return [...state, action.payload]
            }
        case "REMOVE_FRUIT": 
            return state.filter(function (value) {
                return value != action.payload
            })
        case "EMPTY_BASKET":
            return []
        default:
            return state
    }
}