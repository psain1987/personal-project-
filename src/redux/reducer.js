import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {

    id: '',
    email: '',
    loggedOn: false,
    error: null
}

export const getUser = createAsyncThunk('user/getUser', async () => {
    
        const res = await axios.get('/api/oneUser')
        console.log(res)
        return res.data
    })
    
export const registerUser = createAsyncThunk('user/register', async (userCredentials, thunkAPI) => {
    try {
        const res = await axios.post('/api/register', userCredentials)
        return res.data
    }
    catch (err) {
        return thunkAPI.rejectWithValue(err.response.request.response)
    }
})

export const loginUser = createAsyncThunk('user/login', async (userCredentials, thunkAPI) => {
    try {
        const res = await axios.post('/api/login', userCredentials)
        return res.data
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.response.request.response)
    }
})

export const logoutUser = createAsyncThunk('user/logout', async () => {
    await axios.post('/api/logout')

})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: {
        [registerUser.fulfilled]: (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.loggedOn = true
        },
        [registerUser.rejected]: (state, action) => {
            state.error = action.payload
        },
        [loginUser.fulfilled]: (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.loggedOn = true
        },
        [loginUser.rejected]: (state, action) => {
            state.error = action.payload
        },
        [getUser.fulfilled]: (state, action) => {
            state.id = action.payload.id
            state.email = action.payload.email
            state.loggedOn = true
        },
        [getUser.rejected]: () => {
            return initialState
        },   
        [logoutUser.fulfilled]: () => {
            return initialState
        }

    }
})

export default userSlice.reducer



























// const REGISTER_USER = 'REGISTER_USER';
// const LOGIN_USER = 'LOGIN_USER';
// const LOGOUT_USER = 'LOGOUT_USER';



// export const registerUser = (email, password) => async (dispatch) => {

//     const history = useHistory();

//     try{
//         const res = await axios.post('/api/register', { email, password })
//         history.push('/dash')
//         return ({ type: REGISTER_USER, payload: res.data.user })
//     }
//     catch(err){
//         console.log(err.response.request.response)
//     }
// }

// export const loginUser = (email, password) => async (dispatch) => {

//     const history = useHistory();

//     try{
//         const res = await axios.post('/api/login', { email, password })
//         history.push('/dash')
//         return({ type: LOGIN_USER, payload: res.data.user })
//     }
//     catch(err){
//         console.log(err.response.request.response)
//     }
// }

// export const logoutUser = () => async (dispatch) => {

//     const history = useHistory();

//     try{
//         await axios.post('/api/logout')
//         history.push('/')
//         return({ type: LOGOUT_USER })

//     }
//     catch(err){
//         console.log(err.response.request.response)
//     }
// }

// export default function reducer (state = initialState, action){

//     const { type, payload } = action

//     switch(type){
//         case REGISTER_USER: 
//             return {...state,  user: payload, id: payload.id, email: payload.email, loggedOn:true};
//         case LOGIN_USER: 
//             return {...state,  user: payload, id: payload.id, email: payload.email, loggedOn:true};
//         case LOGOUT_USER:
//             return initialState;
//         default:
//             return state;
//     }
// }