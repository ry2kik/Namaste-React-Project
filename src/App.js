/**
 * Make component for every logical thing that will help our code to be more:
 * Modular
 * Readable
 * Maintainable
 * Testable
 * Reusable
 */
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./Component/Body";
import Error from "./Component/Error";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Contact from "./Component/Contact";
import Profile from "./Component/ProfileClass";
import SignupForm from './Component/SignupForm';
import RestaurentMenu from "./Component/RestaurentMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./Component/Shimmer";

/**
 * 
 * Chunking
 * Code spliting
 * Dynamic bundling
 * lazy loading
 * on demand loading - is used when a part of big application is in use
 * Dynamic import
 */

// Neverever dynamically load component inside another component
const Instamart = lazy(() => import('./Component/Instamart'));
const About = lazy(() => import('./Component/About'));

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
                element: 
                    <Suspense fallback = { <h1>Loading... </h1> }>
                        <About />
                    </Suspense>,
                children: [
                    {
                        // path: '/profile', This will leads to localhost:1234/profile that's why we have to route like as follow
                        path: 'profile',   // localhost:1234/about/profile
                        element: <Profile />
                    }
                ]
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
            },
            {
                path: '/instamart',
                element: 
                    <Suspense fallback = { <Shimmer /> } >
                        <Instamart />
                    </Suspense>
            }
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router = { appRouter } />);