import { createSlice } from "@reduxjs/toolkit";
import { UserSliceStateObject } from './../../utility/interface';

const initialState: UserSliceStateObject = {
    user:{
        uid: '',
        name: '',
        email: '',
        quiz: [],
        score: 0
    }, 
    token:"",
    loader : false
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        getUser(state, action){
            state.user = action.payload
        },
        getToken(state, action){
            state.token = action.payload
        },
        toggleLoader(state, action){
            state.loader = action.payload
        },
        handleSignout(state, action){
            state.token = action.payload.token
            state.user = action.payload.user
        },
    }
})


export const {getUser, getToken, toggleLoader, handleSignout} = UserSlice.actions

export default UserSlice