const restaurantMasterReducer = (state = {}, { type, payload }) => {
    if (type === "GET_RESTAURANT_MASTER") {
        return payload
    }
    return state
}

export default restaurantMasterReducer