import React, { Component } from 'react'
import Header from './Header';

function Sidebar(){
    return(
        <>
            <Header/>
            <div className='dark:bg-slate-800 m-0 p-0 h-screen w-screen'>
               
                
                    <ul className='text-white font-medium w-40 h-full dark:bg-slate-700 mt-20  pt-5 pb-5 text-center rounded-md text-xl font-sans  text-2xl  space-y-6 '>

                        <li className='hover:border-b-2'> <button className='hover:text-slate-300'> Home </button> </li>
                        <li className='hover:border-b-2'> <button className='hover:text-slate-300'> Friends </button> </li>
                        <li className='hover:border-b-2'> <button className='hover:text-slate-300'> Groups </button> </li>
                        <li className='hover:border-b-2'> <button className='hover:text-slate-300'> Saved </button> </li>
                        <li className='hover:border-b-2'> <button className='hover:text-slate-300'> Profile </button> </li>
                        
                        {/* <li>fsdada</li>
                        <li>fsdfdf</li>     */}
                    </ul> 
                
            
            </div>
        </>
    )
}

export default Sidebar;