import { Stack } from '@mui/material'
import React, {ReactNode} from 'react'
import { Helmet } from 'react-helmet'


interface PageProps {
  title: string,
  children: ReactNode
}

export default function Page({title, children}: PageProps) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>

      <Stack bgcolor={'#343434'} height={'100%'}>
        {children}
      </Stack>

    </>
  )
}
