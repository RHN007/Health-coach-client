import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AboutUs from "../../pages/AboutUs/AboutUs";
import Added from "../../pages/Added/Added";
import AddedServices from "../../pages/Added/AddedServices";
import Blogs from "../../pages/Blogs/Blogs";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/Home";
import AllServices from "../../pages/Home/Services/AllServices";
import ServiceDetails from "../../pages/Home/Services/ServiceDetails";

import Login from "../../pages/Login/Login";
import AddReview from "../../pages/Review/AddReview";
import Review from "../../pages/Review/Review";
import Signup from "../../pages/Signup/Signup";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";




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
                path: '/services', 
                element: <AllServices></AllServices>, 
            },
            {
                path: '/services/:id', 
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:9000/services/${params.id}`)
            },
            {
                path: '/added/:id',
                element: <PrivateRoute><Added></Added></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:9000/services/${params.id}`)
            },
            {
                path: '/added', 
                element:<PrivateRoute><AddedServices></AddedServices></PrivateRoute>
            }, 
            {
                path:'/reviews', 
                element: <AddReview></AddReview>
            },
            {
                path: '/reviews/:id',
                element: <Review></Review>, 
                loader: ({params}) => fetch(`http://localhost:9000/services/${params.id}`)

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