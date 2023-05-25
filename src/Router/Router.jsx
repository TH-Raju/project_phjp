import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Front from "../Components/Front";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Front></Front>
            }
        ]
    }
])