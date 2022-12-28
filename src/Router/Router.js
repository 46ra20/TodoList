import { createBrowserRouter } from "react-router-dom";
import AddTask from "../Pages/AddTask/AddTask";
import FinishedTask from "../Pages/FinishedTask/FinishedTask";
import LayOut from "../Pages/LayOut/LayOut";
import Login from "../Pages/LogForm/Login/Login";
import Register from "../Pages/LogForm/Register/Register";
import MyTask from "../Pages/MyTask/MyTask";
import PrivateRouter from "./PrivateRouter/PrivateRouter";

export const pageRouter = createBrowserRouter([
    {
        path:'/',
        element:<LayOut/>,
        children:[
            {
                path:'/',
                element:<PrivateRouter><AddTask/></PrivateRouter>
            },
            {
                path:'/my-task',
                element:<PrivateRouter><MyTask/></PrivateRouter>
            },
            {
                path:'/finished-task',
                element:<PrivateRouter><FinishedTask/></PrivateRouter>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            }

        ]
    }
])