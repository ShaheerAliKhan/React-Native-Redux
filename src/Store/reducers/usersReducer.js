const usersReducer = (state = {}, { type, payload }) => {
if (type === "UPDATE_USER") {
        return payload
    }
    return state
}

export default usersReducer