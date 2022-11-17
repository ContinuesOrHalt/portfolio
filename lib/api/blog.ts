import { ApiResponseIdAny, ApiResponseList } from '@lib/interface/common'
import axios from 'config/axios'
import { useQuery } from 'react-query'

const projectKey = 'blog'

// api
export const getBlogs: ApiResponseList = (params) =>
  axios.get('/posts_88token', { params })

export const getBlog: ApiResponseIdAny = (id) =>
  axios.get(`/posts_88token/${id}`)

// hook
export const useBlogs = (params: any) =>
  useQuery([projectKey, params], () => getBlogs(params))

export const useBlog = (id: any, initialData?: any) =>
  useQuery([projectKey, id], () => getBlog(id), { enabled: !!id, initialData })
