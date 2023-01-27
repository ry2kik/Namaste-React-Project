/**
 * Make component for every logical thing that will help our code to be more:
 * Modular
 * Readable
 * Maintainable
 * Testable
 * Reusable
 */
import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Component/Body";
import About from "./Component/About";
import Error from "./Component/Error";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import SignupForm from './Component/SignupForm';
import RestaurentMenu from "./Component/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// Never create a component inside a component, for example don't create a component inside AppLayout component;
const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

// There are two types of routing: 1) Client-side routing and 2) Server-side Routing
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />,
                // children: [
                //     {
                //         // path: '/profile', This will leads to localhost:1234/profile that's why we have to route like as follow
                //         path: 'profile',   // localhost:1234/about/profile
                //         element: <Profile />
                //     }
                // ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurent/:id',
                element: <RestaurentMenu />
            },
            {
                path:'/signupform',
                element: <SignupForm />
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = { appRouter } />);