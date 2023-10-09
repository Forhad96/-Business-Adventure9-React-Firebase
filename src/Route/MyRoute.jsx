import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import TourDetails from "../Pages/ToursDetails/TourDetails";
import Moments from "../Pages/Moments/Moments";
import Login from "../Pages/Users/Login";
import Register from "../Pages/Users/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Favorites from "../Pages/Favorites/Favorites";
import Contact from "../Pages/Contact/Contact";
import Profile from "../Pages/Profile/Profile";


const MyRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "tourDetails/:Id",
        element: (
          <PrivateRoute>
            <TourDetails></TourDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/moments",
        element: <Moments></Moments>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/favorites",
        element: (
          <PrivateRoute>
            <Favorites></Favorites>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default MyRoute;