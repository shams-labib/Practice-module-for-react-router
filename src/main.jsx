import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home.jsx'
import Contact from './Components/Contact.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/home',
        element:<Home></Home>,
       loader: async ()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        return data.json();
       }
      },
      {
        path:'contact',
        element:<Contact></Contact>
      }
    ]
  },
  {
    path:'*',
   element:<App></App>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
