import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import TourDetails from "../Pages/ToursDetails/TourDetails";
import Moments from "../Pages/Moments/Moments";
import Login from "../Pages/Users/Login";
import Register from "../Pages/Users/Register";


const MyRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'tourDetails/:Id',
                element:<TourDetails></TourDetails>
            },
            {
                path:'/moments',
                element:<Moments></Moments>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default MyRoute;