import "./App.css";
import { RouterProvider } from "react-router-dom";
import { pageRouter } from "./Router/Router";
import { ToastContainer } from "react-toastify";
import { Tooltip } from "react-tooltip";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "./UserContext/UserContext";

function App() {
  const {theme} = useContext(AuthContext)
  return (
    <div  data-theme={`${theme?'garden':'dark'}`} className="min-h-screen">
      <RouterProvider router={pageRouter}>
        <ToastContainer />
        <Tooltip />
      </RouterProvider>
    </div>
  );
}

export default App;
