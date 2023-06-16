import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBasket} from "../../Type/IUser";

interface BasketState {
    basket: IBasket[]
}
const local: any = localStorage.getItem("basket")
const initialState: BasketState = {
    basket: JSON.parse(local) || [],
}

export const BasketReducer =  createSlice({
    name: "basket",
    initialState,
    reducers: {
   getBasket(state, action: PayloadAction<IBasket>) {
       let basket = state.basket.find(el => el.id === action.payload.id)
       if (basket) {
           state.basket = state.basket.map(el => el.id === action.payload.id ? {...el, count: el.count + 1} : el)
       } else {
           return {...state, basket: [...state.basket, {...action.payload, count: 1}]}
       }

     },
     delBasket(state, action: PayloadAction<IBasket>){
      state.basket = state.basket.filter(el => el.id !== action.payload.id)
      },
        decBasket(state, action: PayloadAction<IBasket>) {
            state.basket = state.basket.map(el => {
                if (el.id === action.payload.id && el.count > 1) {
                    return {...el, count: el.count - 1}
                } else {
                    return el
                }
            })
        }
    }
})
export default BasketReducer.reducer
export const {getBasket, delBasket, decBasket} = BasketReducer.actions