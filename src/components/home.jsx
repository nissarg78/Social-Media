import {Link, NavLink} from 'react-router-dom'

export default function Home() {
    return (
        <>
          
            
           
         
           <p className='dark:bg-slate-700 text-white text-center text-2xl mt-5 rounded-md ml-3 mr-3'>Home Page</p>
           <div className=' mt-10 text-center mx-2 space-x-5 text-xl'>
           <Link className='dark:bg-slate-300 rounded-md' to="/login">Login</Link>
           <Link className='dark:bg-slate-300 rounded-md' to="/register">Register</Link>
            </div>
                 
             
            {/* <button type='submit'> Register</button> */}
        </>
    )
}

// module.exports= Home