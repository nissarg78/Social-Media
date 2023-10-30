import {Link, NavLink} from 'react-router-dom'
import './index.css' 
import { useEffect } from 'react'
import  axios from 'axios'
import { useState } from 'react'
import { ThemeProvider } from '../contexts/theme'
import Sidebar from './Sidebar'

function HomePage() {

    return(
    <>
        <Sidebar/>
        {/* <h1>Home page</h1> */}
    </>
    )
}

export default HomePage;