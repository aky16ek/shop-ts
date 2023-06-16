import {AppDispatch} from "../Store";
import axios from "axios";
import {IUser} from "../../Type/IUser";
import {getUsers} from "./userSlice";

export const fetching = () => async (dispatch : AppDispatch) => {
    try {
 const res = await axios.get<IUser[]>(`https://fakestoreapi.com/products/`)
        dispatch(getUsers(res.data))
    }catch (err: any) {
dispatch(err.message)
    }
}