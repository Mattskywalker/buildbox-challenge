import { IconButton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import Trash from '../../assets/icons/trash';
import Image from '../../assets/Image';
import Card from '../Card'

interface PostProps {
  image?: string | null;
  message?: string;
  author?: string; 
}

export default function Post({image = null, message, author}: PostProps) {

  const imageIsEmpty = image === null;
  const [imageError, setImageError] = useState(imageIsEmpty);

  return (
    <Card>
      <Stack>
        <IconButton style={{ padding: 0 }} aria-label="upload picture" component="label" >
          <Stack
            overflow={'hidden'}
            borderRadius={'40%'}
            width={{ xs: '88px', xl: '120px' }}
            height={{ xs: '88px', xl: '120px' }}
            border={'1px solid #EDEDED10'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            {imageError  && <Image />}
            {!imageIsEmpty && !imageError && <img onError={() => setImageError(true)} width={'100%'} src={image} alt={'message image'} />}
            {/* <input onChange={handleImage} hidden accept="image/*" type="file" /> */}
          </Stack>
        </IconButton>
      </Stack>
      <Stack flexDirection={'column'} >
        <Typography>
          {message}
        </Typography>

        <Typography>
          Enviado por:
        </Typography>
        <Typography>
          {author}
        </Typography>
      </Stack>
    </Card>
  )
}
