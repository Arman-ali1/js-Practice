import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route ,RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import ComOne from './comOne/ComOne'
import ComTwo from './comTwo/ComTwo'
import ComThree from './comThree/ComThree'
import Layout from './Layout'
// import Home from './Home/Home'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout />}>
      <Route path='' element={<App />} />
      <Route path='/ComOne' element={  <ComOne />} />
      <Route path='/ComTwo' element={<ComTwo />} />
      <Route path='/ComThree' element={<ComThree />} />
      {/* <Route path='user/:userid' element={<User />} />
      <Route path='Login' element={<Login />} />
      <Route path='Register' element={<Register />} /> */}
      {/* <Route path='UserDetail' element={<UserDetail />}/> */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode >
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
