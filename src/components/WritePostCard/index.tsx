import { IconButton, Stack, styled, TextField } from '@mui/material'
import React, { ChangeEvent, useState } from 'react'
import Trash from '../../assets/icons/trash'
import Image from '../../assets/Image'
import Button from '../Button'
import Card from '../Card'
import Link from '../Link'
import TextArea from '../TextArea'
import TextInput from '../TextInput'

export default function WritePostCard() {

  const [image, setImage] = useState('');
  const [imageBlob, setImageBlob] = useState<File | null>(null);
  const imageIsEmpty = image === '';

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) { return }

    setImageBlob(files[0]);
    setImage(URL.createObjectURL(files[0]));
  }

  function handleRemoveImage() {
    setImage('');
    setImageBlob(null);
  }

  return (
    <Card gap={1} >
      <Stack alignItems={'center'} flexDirection={'row'} width={'100%'} >
        <Stack flex={1} height={'30px'} />
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
            {imageIsEmpty && <Image />}
            {!imageIsEmpty && <img width={'100%'} src={image} alt={'message image'} />}
            <input onChange={handleImage} hidden accept="image/*" type="file" />
          </Stack>
        </IconButton>
        <Stack flex={1} >
          {
            !imageIsEmpty &&
              <IconButton onClick={() => handleRemoveImage()} style={{ height: '42px', width: '42px' }} >
                <Trash />
              </IconButton>
          }
        </Stack>
      </Stack>
      <TextInput style={{ marginTop: '16px' }} placeholder='Digite seu nome' />
      <TextArea placeholder='Mensagem' />

      <Stack pt={2} gap={2} width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent='flex-end' className={'area-button'} >
        <Link onClick={() => { alert('ok') }} >Descartar</Link>
        <Button>Publicar</Button>
      </Stack>
    </Card>
  )
}
