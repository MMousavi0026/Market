export const cartNumberReducer = (state, action) => {
    if (action.type === "increment") {
        return state + 1;
    }
    else
        return state;
}