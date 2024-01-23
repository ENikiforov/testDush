import {createStore} from "redux";

let initialState = {
    temp: '',
    co2:'',
    excess: false
}

const reducer  = (state = initialState, action) =>{
    switch (action.type) {
        case 'UPDATE_TEMP':
            return { ...state, temp: action.payload }
        case 'UPDATE_CO2':
            return { ...state, co2: action.payload }
        case 'UPDATE_EXCESS':
            return { ...state, excess: action.payload }
        default:
            return state

    }
}
const store = createStore(reducer)
export default  store