import React from 'react'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <div className="bg-gray-600 w-full h-screen flex flex-row justify-center text-center items-center text-white text-3xl  ">
    <Outlet />

    </div>
    </>
  )
}

export default Layout