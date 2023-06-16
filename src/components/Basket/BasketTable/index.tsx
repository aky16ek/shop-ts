import React from 'react';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {decBasket, delBasket, getBasket} from "../../../Store/Reducers/BasketReducer";
import {IBasket} from "../../../Type/IUser";
import {useAppSelector} from "../../../hooks/useAppSelektor";

const BasketTable = ({el}: any) => {
    const dispatch = useAppDispatch()
    const {basket} = useAppSelector(s => s.BasketReducer)

    const del = (el: any, id: any) => {
        localStorage.setItem("basket", JSON.stringify([...basket.filter(el => el.id !== id)]))
        dispatch( delBasket(el))

    }
    const addBasket = (el: IBasket) => {
        dispatch(getBasket(el))
    }
    const dec = (el: IBasket) => {
        dispatch(decBasket(el))
    }


    return (
        <tr className=" border-2 ">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    <img className="rounded-2xl" src={el.image} width={100} alt=""/>
        </th>
        <td className="text-[18px] px-6 py-4 text-yellow-400 ">
        {el.title}
        </td>
        <div className = "flex py-14 items-center justify-center" >
    <button onClick = {()=>{
        dec(el)
    }} className="text-yellow-400" > -</button>
        < p className="mx-2 text-yellow-400">{el.count}</p>
        <button onClick={() => addBasket(el)} className="text-yellow-400" >+</button>
        </div>
        <td className="px-6 py-4 text-yellow-400">
        {el.price * el.count}$
    </td>
    <td className="px-6 py-4">
    <button onClick={() =>{
        del(el, el.id)
    }}
    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
    <span
        className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Delete
        </span>
        </button>
        </td>
        </tr>
);
};

export default BasketTable;