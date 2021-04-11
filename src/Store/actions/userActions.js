import axios from "axios"

const update_user = async (dispatch) => {
    await axios.get('https://reqres.in/api/users?page=2').
    then((resp)=>{
        return dispatch({type : "UPDATE_USER", payload : resp.data.data })
    })
}

export default update_user