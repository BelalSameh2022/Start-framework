import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import NotFound from './NotFound/NotFound'

export default function App() {
  const routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { path: '', element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <NotFound/> }
      ]
    }
  ])

  return <>
    <RouterProvider router={routers} />
  </>
}
