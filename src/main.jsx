import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Layout from './components/Layout.jsx'
// import Login from './components/Login.jsx'
// import Register from './components/Register.jsx'
// import Home  from './components/home.jsx'
// import {RouterProvider, createBrowserRouter} from 'react-router-dom'
// import { Route} from 'react-router-dom'
import { Route,BrowserRouter as Router, RouterProvider, createBrowserRouter, createRoutesFromElements , Link} from 'react-router-dom'


// const router= createBrowseRouter([
//     {
//         path:'/login',
//         element: <Login/>
//         // children: [
//         //     {
//         //         path:'/login',
//         //         element: <Login/>,
//         //     },
            
//         //     {
//         //         path:'/register',
//         //         element: <Register/>,
//         //     }
//         // ]
//     }
// ])

// const router= createBrowserRouter(
//     createRoutesFromElements(
       
//         <Route path="/" element={Home}>
//             <Route path="/login" element={Login } />
//             <Route path="/register" element={Register}/>
//         </Route>
//     )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <App/>
   </React.StrictMode>
)

{/* <React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>, */}
