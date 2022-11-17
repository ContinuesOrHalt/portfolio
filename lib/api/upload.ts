import axiosRaw from 'axios'
import axios from 'config/axios'
import { map } from 'lodash'

import { useMutation } from 'react-query'

export const uploadPhoto = async ({ media, type = 'avatar' }: any) => {
  const formData = new FormData()
  const file = media[0]
  formData.append('file', file, file.name)

  const { uploadInfo }: any = await axios.post('/files', {
    purpose: 'identity_document',
    name: 'string',
    mimeType: file.type,
  })

  map(uploadInfo.fields, (value, key) => formData.append(key, value))

  return axiosRaw.post(uploadInfo.url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export const useUploadPhoto = () => {
  return useMutation(uploadPhoto)
}
