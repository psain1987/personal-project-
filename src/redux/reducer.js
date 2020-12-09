import axios from 'axios';

const initialState = {
    user: {},
    id: '',
    email: '',
    loggedOn: false
}

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';



export const registerUser = (email, password) => async (dispatch) => {
    try{
        const res = await axios.post('/api/register', { email, password } )
        dispatch({ type: REGISTER_USER, payload: res.data.user })
        console.log(res)
    }
    catch(err){
        console.log(err.response.request.response)
    }
}

export const loginUser = (email, password) => async (dispatch) => {
    try{
        const res = await axios.post('/api/login', { email, password } )
        dispatch({ type: LOGIN_USER, payload: res.data.user })
        console.log(res)
    }
    catch(err){
        console.log(err.response.request.response)
    }
}

export const logoutUser = () => async (dispatch) => {
    try{
        await axios.post('/api/logout')
        dispatch({ type: LOGOUT_USER })
        
    }
    catch(err){
        console.log(err.response.request.response)
    }
}

export default function reducer (state = initialState, action){

    const { type, payload } = action

    switch(type){
        case REGISTER_USER: 
            return {...state,  user: payload, id: payload.id, email: payload.email, loggedOn:true};
        case LOGIN_USER: 
            return {...state,  user: payload, id: payload.id, email: payload.email, loggedOn:true};
        case LOGOUT_USER:
            return initialState;
        default:
            return state;
    }
}