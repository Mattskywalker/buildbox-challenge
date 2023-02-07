import { Stack } from '@mui/system'
import React from 'react'
import BxLogo from '../../assets/BxLogo'

import './style.css'

export default function LoadingScreen() {
  return (
    <Stack gap={3} alignItems={'center'} justifyContent={'center'} flex={1} width={'100%'} height={'100%'} >
      <BxLogo />
      <span className="loader"/>
    </Stack>
  )
}
