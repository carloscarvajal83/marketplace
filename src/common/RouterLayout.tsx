import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import React from 'react'


export const RouterLayout :React.FC<{}> = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}