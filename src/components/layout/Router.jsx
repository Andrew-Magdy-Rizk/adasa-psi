import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Blog from "../blog/Blog";
import Layout from "./layout";
import PostDetails from "../postDetails/PostDetails";

export const browserRouter = createBrowserRouter([{
    path: "", element: <Layout />, children: [{
        path: "", element: <Home />
    },
    {
        path: "blog", element: <Blog />
    },{
        path:"blog/:slug", element: <PostDetails/>
    },{
        path:"*", element: <h1 className="vh-100 d-flex justify-content-center align-items-center text-center">404 Not Found</h1>
    }
    ]
}])