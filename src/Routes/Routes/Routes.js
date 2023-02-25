import { createBrowserRouter, Navigate } from "react-router-dom";
import CarBodyType from "../../Components/CarBodytypes/CarBodyType";
import DashboardLayout from "../../Layouts/Dashboard/DashboardLayout";
import Main from "../../Layouts/Main/Main";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Contact from "../../Pages/Contact/Contact";
import AddProduct from "../../Pages/Dashboard/Product/AddProduct";

import ProductChart from "../../Pages/Dashboard/Product/ProductChart";
import Transaction from "../../Pages/Dashboard/Transaction/Transaction";
import CarDetails from "../../Pages/Home/CarDetails/CarDetails";
import Home from "../../Pages/Home/Home";
// import Product from "../../Pages/Home/Products/Product";
import Login from "../../Pages/Login/Login";
import SearchPage from "../../Pages/SearchPage/SearchPage";
import NotFound from "../../Pages/Shared/NotFound";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoutes from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
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
                path: "/search",
                element: <SearchPage />,
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
    {
        path: "/dashboard",
        element: (
            <PrivateRoutes>
                <DashboardLayout />
            </PrivateRoutes>
        ),
        children: [
            {
                path: "/dashboard",
                element: (
                    <AdminRoute>
                        <ProductChart />
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/addproduct",
                element: (
                    <AdminRoute>
                        <AddProduct />
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/transaction",
                element: (
                    <AdminRoute>
                        <Transaction />
                    </AdminRoute>
                ),
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
]);
export default router;
