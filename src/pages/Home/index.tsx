import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import React from 'react'
import Card from '../../components/WritePostCard'
import Page from '../../layouts/Page'

export default function Home() {
  return (
    <Page title='Home'>
      <Stack paddingTop={6} >
        <Card />
      </Stack>
    </Page>
  )
}
