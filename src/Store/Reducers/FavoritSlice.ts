import {IBasket, IFavorite} from "../../Type/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface FavoritSlice {
    favorite: IFavorite[]
}
const initialState: FavoritSlice = {
    favorite: [],
}
export const FavoritSlice = createSlice( {
    name: 'favorite',
    initialState,
    reducers: {
        getFavorite(state, action: PayloadAction<IFavorite>) {
            let favorite = state.favorite.find(el => el.id === action.payload.id)
            if (favorite) {
                state.favorite = state.favorite.filter(el => el.id !== action.payload.id)
            }else {
                return{...state, favorite: [...state.favorite, action.payload]}
            }
        },
        delFavorite(state, action: PayloadAction<IFavorite>){
            state.favorite = state.favorite.filter(el => el.id !== action.payload.id)
        },
    }
})
export default  FavoritSlice.reducer
export const {getFavorite,delFavorite} = FavoritSlice.actions