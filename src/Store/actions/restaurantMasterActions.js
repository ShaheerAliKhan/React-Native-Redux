import axios from 'axios'
import store from '..'

const get_restaurant_master = async (dispatch) => {
    const url = `https://devfoodapp.m3tech.com.pk/public/api/getRestaurantMaster`
    const formData = new FormData()
    formData.append('lat', store.getState().location.latitude)
    formData.append('long', store.getState().location.longitude)
    formData.append('rid', 18)
    await axios.post(url, formData).then((resp)=>{
        return dispatch({type : 'GET_RESTAURANT_MASTER', payload : resp.data.data.list.Restaurant});
    })
}

export default get_restaurant_master
