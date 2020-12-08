
const initialState = {
    email: ''
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export function loginUser (email){
    return {
        type: LOGIN_USER,
        payload: email
    }
}

export function logoutUser(){
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export default function reducer (state = initialState, action){
    switch(action.type){
        case LOGIN_USER: 
            return {...state, email: action.payload.email }
        case LOGOUT_USER:
            return {...state, ...action.payload}
        default:
            return state
    }
}