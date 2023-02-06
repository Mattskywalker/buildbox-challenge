import { IconButton, Stack, styled, TextField } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import Image from '../../assets/Image'
import Button from '../Button'
import Link from '../Link'
import TextArea from '../TextArea'
import TextInput from '../TextInput'

export default function Card() {

  const [image, setImage] = useState('');
  const imageIsEmpty = image === '';

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) { return }

    setImage(URL.createObjectURL(files[0]));
  }

  return (
    <Stack gap={1} p={3} alignItems={'center'} justifyContent={'center'} border={'1px solid #3b3b3b'} borderRadius={1} bgcolor={'#313131'} >
      <IconButton style={{ padding: 0 }} aria-label="upload picture" component="label" >
        <Stack
          overflow={'hidden'}
          borderRadius={'40%'}
          width={{xs: '88px', xl: '120px'}}
          height={{xs: '88px', xl: '120px'}}
          border={'1px solid #EDEDED10'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          {imageIsEmpty && <Image />}
          {!imageIsEmpty && <img width={'100%'} src={image} alt={'message image'} />}
          <input onChange={handleImage} hidden accept="image/*" type="file" />
        </Stack>
      </IconButton>

      <TextInput style={{ marginTop: '16px' }} placeholder='Digite seu nome' />
      <TextArea placeholder='Mensagem' />

      <Stack pt={2} gap={2} width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent='flex-end' className={'area-button'} >
        <Link onClick={() => { alert('ok') }} >Descartar</Link>
        <Button>Publicar</Button>
      </Stack>
    </Stack>
  )
}
