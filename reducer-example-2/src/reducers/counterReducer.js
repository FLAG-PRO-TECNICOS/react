export function counterReducer(state, action) {
    switch (action.type) {
      case "ADD_1":
        return state + 1;
      case "SUB_1":
        return state - 1;
      default:
        return state;
    }
  }