import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelektor";
import { getBasket} from "../../Store/Reducers/BasketReducer";
import BasketTable from "./BasketTable";

const Basket = () => {
    const dispatch = useAppDispatch()
    const {basket} = useAppSelector(s => s.BasketReducer)
    useEffect(() => {
dispatch(getBasket)
    }, [])
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-2 my-2">
            <table className="w-full text-sm text-left text-amber-500 dark:text-gray-100 sticky-0 top-0">
                <thead className="text-xs text-gray-100 uppercase bg-gray-50 dark:bg-cyan-700 dark:text-gray-100 py-5">
                <tr>
                    <th scope="col" className="px-6 py-3">
                      Images
                    </th>

                    <th scope="col" className="px-6 py-3">
                        Product name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Count
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    basket.map((el) => (
                     <BasketTable el={el}/>
                    ))
                }
                </tbody>
            </table>


        </div>
    );
};

export default Basket;