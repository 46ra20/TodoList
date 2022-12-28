import { createBrowserRouter } from "react-router-dom";
import AddTask from "../Pages/AddTask/AddTask";
import FinishedTask from "../Pages/FinishedTask/FinishedTask";
import LayOut from "../Pages/LayOut/LayOut";
import MyTask from "../Pages/MyTask/MyTask";

export const pageRouter = createBrowserRouter([
    {
        path:'/',
        element:<LayOut/>,
        children:[
            {
                path:'/',
                element:<AddTask/>
            },
            {
                path:'/my-task',
                element:<MyTask/>
            },
            {
                path:'/finished-task',
                element:<FinishedTask/>
            }

        ]
    }
])