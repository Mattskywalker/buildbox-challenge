import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import React, { useContext } from 'react'
import LoadingScreen from '../../components/LoadingScreen'
import Post from '../../components/Post'
import Card from '../../components/WritePostCard'
import { PostContext } from '../../Context/PostContext'
import Page from '../../layouts/Page'

import EmptyIcon from '../../assets/images/package.png'

export default function Home() {

  const { getPosts } = useContext(PostContext)

  return (
    <Page title='Home'>
      <Stack>
        <Card />
      </Stack>
      <Stack pt={8} >
        <Typography color={'#9f9f9f'} >Feed</Typography>

        <Stack style={{ transition: '2s' }} gap={2} >
          {
            getPosts().map((value, index) => (
              <Post
                post={value}
                key={index}
              />
            ))
          }
          {
            getPosts().length === 0 &&
            <Stack pt={3} flexDirection={'row'} alignItems={'center'} gap={2}>
              <img src={EmptyIcon} width={'42px'} />
              <Typography color={'#9f9f9f'} >Nada para exibir agora. 😥</Typography>
            </Stack>
          }
        </Stack>
      </Stack>
    </Page>
  )
}
