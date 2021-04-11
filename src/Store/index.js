import { createStore, combineReducers, applyMiddleware } from 'redux'
import personReducer from './reducers/personReducer'
import gameReducer from './reducers/gameReducer'
import usersReducer from './reducers/usersReducer'
import locationReducer from './reducers/locationReducer'
import restaurantMasterReducer from './reducers/restaurantMasterReducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({ 
    game: gameReducer, 
    person: personReducer, 
    users : usersReducer,
    location : locationReducer,
    restaurantMaster : restaurantMasterReducer
})

const InitialStates = {
    game : {
        name : 'Football'
    },
    person : {
        name : 'Shaheer'
    },
    users : [],
    location : {
        latitude : 0,
        longitude : 0
    },
    restaurantMaster : []
}

const middleware = [thunk]
const store = createStore(reducers, InitialStates, applyMiddleware(...middleware))

export default store