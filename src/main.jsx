import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { DataContextProvider } from './contexts/DataContext.jsx'
import Home from './Components/Home'
import Destination from './Components/Destination'
import Crew from './Components/Crew'
import Technology from './Components/Technology.jsx'
import Error from './Components/Error.jsx'

const router = createHashRouter ([
  {
    path: '/',
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: '/Destination',
    element: <Destination/>
  },
  {
    path: '/Crew',
    element: <Crew/> 
  },
  {
    path: '/Technology',
    element: <Technology/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider>
    <RouterProvider router={router}/>
    </DataContextProvider>
  </React.StrictMode>,
)
