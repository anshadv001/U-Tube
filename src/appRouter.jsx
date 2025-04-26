import { createBrowserRouter } from "react-router";
import App from "./App";
import MainBody from "./layouts/MainBody";
import WatchPage from "./layouts/WatchPage";

export const appRouter = createBrowserRouter([
    {
        path : '/',
        element : <App/>,
        children : [
            {
                path : '/',
                element : <MainBody/>
            },
            {
                path : '/watch',
                element : <WatchPage/>
            }
        ]
    }
])