import {IUser} from "../../Type/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IUserState {
    user:IUser[]
}

const initialState: IUserState = {
  user: []
}

export const userSlice = createSlice( {
    name:"user",
    initialState,
    reducers: {
        getUsers(state, action:PayloadAction<IUser[]>){
            state.user = action.payload
        }
    }
})

export default userSlice.reducer
export const {getUsers} = userSlice.actions
