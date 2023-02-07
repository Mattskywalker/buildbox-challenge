import { IconButton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useContext, useState } from 'react'
import Close from '../../assets/icons/Close';
import Image from '../../assets/Image';
import { PostContext } from '../../Context/PostContext';
import { PostModel } from '../../Interfaces/PostInterfaces';
import Card from '../Card'

interface PostProps {
  post: PostModel
}

export default function Post({ post }: PostProps) {

  const {removePost} = useContext(PostContext);
  const imageIsEmpty = post.imageUrl === null;
  const [imageError, setImageError] = useState(imageIsEmpty);

  return (
    <Card>
      <Stack width={'100%'} height={'56px'} alignItems={'flex-end'} >
        <IconButton onClick={() => removePost(post)} >
          <Close />
        </IconButton>
      </Stack>
      <Stack width={'100%'} flexDirection={'row'} >
        <Stack pr={4} >
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
              {imageError && <Image />}
              {!imageIsEmpty && !imageError && <img onError={() => setImageError(true)} width={'100%'} src={post.imageUrl} alt={'message image'} />}
              {/* <input onChange={handleImage} hidden accept="image/*" type="file" /> */}
            </Stack>
          </IconButton>
        </Stack>
        <Stack width={'100%'} flex={1} gap={5} flexDirection={'column'} >
          <Stack width={'100%'} >
            <Typography color={'#9f9f9f'}>
              {post.message}
            </Typography>
          </Stack>

          <Stack>
            <Typography color={'#9f9f9f'}>
              Enviado por:
            </Typography>
            <Typography color={'#9f9f9f'}>
              {post.author}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}
