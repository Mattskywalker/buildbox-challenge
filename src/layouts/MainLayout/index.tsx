import { Stack } from '@mui/material'
import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'


export default function MainLayout() {
  return (
    <>
      <Header />
      <Stack height={'100vh'} width={'100%'} >
        <Outlet />
        <Footer />
      </Stack>
    </>
  )
}
