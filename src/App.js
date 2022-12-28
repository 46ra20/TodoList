import './App.css';
import { RouterProvider } from 'react-router-dom';
import { pageRouter } from './Router/Router';
import { ToastContainer } from 'react-toastify';
import { Tooltip } from 'react-tooltip';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <RouterProvider router={pageRouter} >
      <ToastContainer/>
      <Tooltip/>
    </RouterProvider>
  );
}

export default App;
