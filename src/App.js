import './App.css';
import { RouterProvider } from 'react-router-dom';
import { pageRouter } from './Router/Router';

function App() {
  return (
    <RouterProvider router={pageRouter} />
  );
}

export default App;
