import "./App.css";
import { RouterProvider } from "react-router-dom";
import { pageRouter } from "./Router/Router";
import { useContext } from "react";
import { AuthContext } from "./UserContext/UserContext";
import "react-photo-view/dist/react-photo-view.css";
import { Toaster } from "react-hot-toast";

function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div data-theme={`${theme ? "garden" : "dark"}`} className="min-h-screen">
      <RouterProvider router={pageRouter}>
        <Toaster />
      </RouterProvider>
    </div>
  );
}

export default App;
