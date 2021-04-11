const locationReducer = (state = {}, { type, payload }) => {
    if (type === "UPDATE_LOCATION") {
        return Object.assign({}, state, payload)
    }
    return state
}

export default locationReducer