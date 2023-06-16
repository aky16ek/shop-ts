import {combineReducers, configureStore, createStore} from "@reduxjs/toolkit";
import userSlice from "./Reducers/userSlice";
import BasketReducer from "./Reducers/BasketReducer";
import FavoritSlice from "./Reducers/FavoritSlice";

const rootReducer = combineReducers({
    userSlice,
    BasketReducer,
    FavoritSlice
})



export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,

    })
}



export type rootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]