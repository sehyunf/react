import { Route, RouterProvider, Routes } from 'react-router-dom';
import './App.css';
import router from './day06/router/router';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
