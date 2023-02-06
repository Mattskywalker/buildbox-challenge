import { Stack } from '@mui/material'
import React, { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'


export default function MainLayout() {
  return (
    <>
      <Header />
      <Stack paddingX={{xl: '32%', lg: '20%', sm: '16%'}} >
        <Outlet />
      </Stack>
    </>
  )
}
