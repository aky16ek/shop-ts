 import React, {useEffect} from 'react';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {useAppSelector} from "../../hooks/useAppSelektor";
import {fetching} from "../../Store/Reducers/UserCreator";
import {MdOutlineFavorite} from "react-icons/md";
import {Link} from "react-router-dom";
import {getBasket} from "../../Store/Reducers/BasketReducer";
 import {getFavorite} from "../../Store/Reducers/FavoritSlice";




const User = () => {
    const {basket} = useAppSelector(s => s.BasketReducer)

    const addBasket = (el: any) => {
        localStorage.setItem("basket", JSON.stringify([...basket, {...el, count: 1}]))
        dispatch(getBasket(el))
    }
    const {favorite} = useAppSelector(s => s.FavoritSlice)
const addFavorite = (el: any) => {
        dispatch(getFavorite(el))
}
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(s => s.userSlice)
    useEffect(() => {
        dispatch(fetching())
    })

    return (
        <div className="flex flex-wrap mx-auto justify-center ">
            {
                user.map(el => (
                    <div
                        className="mx-3.5 my-4 w-full max-w-sm pb-10 h-[650px] border border-gray-200 rounded-lg shadow  dark:border-gray-700">
                        <a href="#">
                            <img className="p-4 rounded-2xl w-[100%] h-[60%] " src={el.image}
                                 alt="product image"/>
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-yellow-300">
                                    {el.title.slice(0,30)}
                                </h5>
                            </a>

                            <a href="#">
                                <h5 className="text-l my-5 font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {el.description.slice(0,80)}
                                </h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor"
                                     viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </svg>
                                <span
                                    className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                            </div>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-200 text-start">
                                {el.price}$
                            </p>

                            <div className="flex justify-between mx-auto">

                                         <button onClick={() => {
                                            addBasket(el)

                                        }}
                                                  className="mx-2 text-gray-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-gray-100 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                                        >Add Basket
                                        </button>

                                <Link to={"/favorite"} >
                                    <button onClick={() => {
                                        addFavorite(el)
                                    }}
                                        className="w-[80px] h-[40px] bg-blue-700 flex justify-center items-center text-2xl rounded-lg text-white">
                                        <MdOutlineFavorite/>
                                    </button>
                                </Link>


                            </div>

                        </div>
                    </div>


                ))
            }
        </div>
    );
};

export default User;