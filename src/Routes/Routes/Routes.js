import { createBrowserRouter } from "react-router-dom";
import CarBodyType from "../../Components/CarBodytypes/CarBodyType";
import Main from "../../Layouts/Main/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Contact from "../../Pages/Contact/Contact";
import CarDetails from "../../Pages/Home/CarDetails/CarDetails";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/:carBodyType",
                element: <CarBodyType />,
                loader: ({ params }) => fetch(`http://localhost:5000/${params.carBodyType}`),
            },
            {
                path: "/:carBodyType/:_id",
                element: <CarDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/${params.carBodyType}/${params._id}`),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },
]);
export default router;
