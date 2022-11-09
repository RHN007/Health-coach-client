import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Blogs from "../../pages/Blogs/Blogs";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";



const router = createBrowserRouter(
   [
    {
        path: '/', 
        element: <Main></Main>, 
        children: [
            {
                path:'/', 
                element: <Home></Home>
            }, 
            {
                path:'/contact', 
                element: <Contact></Contact>
            }, 
            {
                path:'/blogs', 
                element: <Blogs></Blogs>
            }, 
            {
                path: '/signup', 
                element: <Signup></Signup>
            }, 
            {
                path: '/login', 
                element: <Login></Login>
            },
            {
                path:'/about',
                element: <AboutUs></AboutUs>
            }
        ]
    }
   ]
    
    )

export default router; 