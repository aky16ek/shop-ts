import React from 'react';
import img from "../../img/man.png"
import png from  '../../img/02 1.svg'

const Home = () => {
    return (
        <div className="relative ">
         <div className="flex mx-auto justify-center pt-20">
             <div className="mr-52 mt-32 ">
                 <h4 className="text-[#3A86FF] w-[227px] bg-[#172656] flex justify-center py-1 my-2.5">100% SATISFIED GUARANTEE</h4>
                 <h1 className="text-4xl font-black text-gray-900 dark:text-white my-5">Power up your <br/>
                     shopify products</h1>
                 <p className="tracking-tighter text-gray-500 md:text-lg dark:text-gray-400 my-5"> More than 90,000+ companies trust our business. Get <br/>
                     help from a dedicated shopify developer today.</p>

                 <form className="flex items-center w-[300px] my-5">
                     <label htmlFor="voice-search" className="sr-only">Your email address</label>
                     <div className="relative w-full">
                         <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                             <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                 <path fillRule="evenodd"
                                       d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                       clipRule="evenodd"></path>
                             </svg>
                         </div>
                         <input type="email" id="voice-search"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your email address" required/>
                             <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                 <svg aria-hidden="true"
                                      className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                      fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                     <path fillRule="evenodd"
                                           d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                                           clipRule="evenodd"></path>
                                 </svg>
                             </button>
                     </div>
                     <button type="submit"
                             className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-[#FFBE0B] rounded-lg border border-blue-700 hover:bg-[#FFBE0B] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#FFBE0B] dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                         <svg aria-hidden="true" className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor"
                              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                         </svg>
                         Search
                     </button>
                 </form>

                 <div className="flex text-white">
                     <input type="radio" /> <h5>30 days free trial</h5>
                     <input type="radio" /> <h5>No credit card required</h5>
                 </div>
             </div>
             <div className="relative">
<div style={{
    background: '#3A86FF',
    width:'447px',
    height:'564px',
    borderRadius:'15px',
    transform: "matrix(0.97, -0.24, 0.21, 0.98, 0, 0)"
}}></div>
                 <div style={{
                     background: 'radial-gradient(50% 50% at 50% 50%, #FFBE0B 0%, #FFBE0B 100%)',
                     width:'447px',
                     height:'564px',
                     borderRadius:'15px',
                    // zIndex:'2',
                     top:'10px',
                     position:'absolute'
                 }}></div>

             </div>
             <img src={img} alt="" className="z-3 absolute top-0 bottom-1/2 w-[820px] h-[720px] rounded-2xl top-10 right-[140px] "/>
             <div className="absolute w-[440px] h-[126px] bg-blue-50 rounded-2xl -bottom-28 flex">
                 <div className="w-[153px] h-[163px] absolute bg-[#FB5607] bottom-0 left-6">
                     <img src={png} alt="" className="absolute bottom-1"/>


                 </div>
                 <div className="left-48 top-8 relative">
                 <h1 className="max-w-lg text-3xl font-semibold leading-normal text-black dark:text-black">Margaret Philips</h1>
                 <p className="tracking-normal text-gray-500 md:text-lg dark:text-gray-400">Watch our best services</p>
             </div>
             </div>
         </div>
        </div>
    );
};

export default Home;