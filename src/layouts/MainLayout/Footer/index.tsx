import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import BxLogo from '../../../assets/BxLogo'

export default function Footer() {
  return (
    <Stack
      alignItems={'flex-start'}
      padding={8}
      justifyContent={'flex-start'}
      height={'100%'}
      bgcolor={'#2b2b2b'}
    >
      <BxLogo />
      <Typography color={'#9f9f9f'} variant={'caption'} >Challenge Post buildBox by:</Typography>
      <Typography color={'#9f9f9f'} variant={'button'} > Mateus Martins</Typography>
    </Stack>
  )
}
