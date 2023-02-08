import { CircularProgress, IconButton, Skeleton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { memo, useContext, useEffect, useState } from 'react'
import Close from '../../assets/icons/Close';
import Image from '../../assets/Image';
import { PostContext } from '../../Context/PostContext';
import { PostModel } from '../../Interfaces/PostInterfaces';
import Card from '../Card'

import { Image as ImageMaterial } from '@mui/icons-material'
import { toast } from 'react-toastify';

interface PostProps {
  post: PostModel
}

function Post({ post }: PostProps) {

  const { removePost } = useContext(PostContext);
  const [imageError, setImageError] = useState(false);
  const [isImageLoading, setImageLoading] = useState(true);

  const [deletingPost, setDeletingPost] = useState(false);

  function handleRemovePost() {
    setDeletingPost(true);
    removePost(post)
      .then(() => {
        toast('Post Deletado.', { type: 'success', position: 'top-center', autoClose: 300 })
      }).catch(() => {
        toast('Falha ao remover Post.', { type: 'error', position: 'top-center', autoClose: 300 })
      }).finally(() => { setDeletingPost(false) });
  }

  return (
    <Card>
      <Stack justifyContent={'space-between'} flexDirection={'row'} width={'100%'} height={{ sm: '42px' }} alignItems={'flex-start'} >
        {deletingPost && <CircularProgress color='error' size={'24px'} />}
        {isImageLoading && !imageError && <CircularProgress color='success' size={'24px'} />}
        <span />
        <IconButton disabled={deletingPost} onClick={() => handleRemovePost()} >
          <Close />
        </IconButton>
      </Stack>
      <Stack gap={4} width={'100%'} flexDirection={{ sm: 'row', xs: 'column' }} >
        <Stack >
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
              {isImageLoading &&
                <Stack alignItems={'center'} justifyContent={'center'} height={'100%'} width={'100%'}>
                  <ImageMaterial style={{ position: 'absolute', zIndex: 1 }} />
                  <Skeleton animation={'wave'} variant='rounded' height={'100%'} width={'100%'} />
                </Stack>}

              {imageError && <Image />}
              <img
                hidden={imageError || isImageLoading}
                onLoad={() => setImageLoading(false)}
                onError={() => {setImageLoading(false); setImageError(true)}}
                width={'100%'}
                src={post.imageUrl} alt={'message image'}
              />
              {/* <input onChange={handleImage} hidden accept="image/*" type="file" /> */}
            </Stack>
          </IconButton>
        </Stack>
        <Stack width={'100%'} flex={1} gap={5} flexDirection={'column'} >
          <Stack width={'100%'} >
            <Typography style={{wordWrap: 'break-word', wordBreak: 'break-all'}} color={'#9f9f9f'}>
              {post.message}
            </Typography>
          </Stack>

          <Stack>
            <Typography variant={'caption'} color={'#9f9f9f'}>
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

export default memo(Post);