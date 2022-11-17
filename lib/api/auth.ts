import { useMutation, useQuery, useQueryClient } from 'react-query'
import axios from 'config/axios'
import { ACCESS_TOKEN } from '@lib/constants/localStorage'
import { useRouter } from 'next/router'
import { useLocalStorage } from 'react-use'

export const currentUserKey = 'user-profile'

export interface LoginDto {
  email: string
  password: string
  otpCode: string
}

export interface SignupDto {
  email: string
  password: string
}
export interface UserDocument {
  id?: string
  email?: string
  firstName?: string
  lastName?: string
  nationality?: string
  country?: string
  state?: string
  city?: string
  address?: string
  address2?: string
  postalCode?: string
  phoneNumber?: string
  dob?: string
  [k: string]: any
}

export const useToken = () => useLocalStorage(ACCESS_TOKEN, '', { raw: true })

// api

export const login = (payload: LoginDto) => axios.post('/auth/login', payload)

export const logout = (payload: any = {}) => {
  return new Promise((rs) => rs({}))
  // return axios.post('/auth/logout', payload)
}

export const register = (payload: SignupDto) => axios.post('/users', payload)

export const verifyEmail = (payload: any = {}) => {
  return new Promise((rs) => setTimeout(() => rs({}), 2000))
  // return axios.post('/auth/verify', payload)
}

export const updatePassword = (payload: object) =>
  axios.post('/auth/changePassword', payload)

export const updatePassForgot = ({ code, id, password }: any) =>
  axios.post(`/passwordResets/${id}/reset`, { code, password })

export const forgotPassword = (payload: object) =>
  axios.post('/passwordResets', payload)

export const verifyForgotPass = ({ code, id }: any) =>
  axios.post(`/passwordResets/${id}/check`, { code })

export const updateUser = (payload: UserDocument) =>
  axios.patch('/users/me', payload)

export const getCurrentUser: () => Promise<UserDocument> = async () => {
  try {
    if (!localStorage.getItem(ACCESS_TOKEN)) return null
    const data: any = await axios.get('/auth/me')
    return data
  } catch (error) {
    localStorage.removeItem(ACCESS_TOKEN)
    return null
  }
}

export const resendOtp = async (email: string) => {
  try {
    return await axios.post('/auth/resend', { email })
  } catch (error: any) {
    return null
  }
}

export const identityVerification = (payload: any = {}) => {
  return new Promise((rs) => setTimeout(() => rs({}), 2000))
  // return axios.post('/auth/verify', payload)
}

// hook

export const useCustomer = () => useQuery(currentUserKey, getCurrentUser)

export const useSignUp = () => useMutation(register)

export const useLogin = () => {
  const queryClient = useQueryClient()
  const [token, setToken] = useToken()
  return useMutation(login, {
    onSuccess: ({ accessToken }: any) => {
      setToken(accessToken)
      queryClient.invalidateQueries(currentUserKey)
    },
  })
}

export const useLogout = (pathname = '/login') => {
  const [token, setToken, removeToken] = useToken()
  const router = useRouter()
  const queryClient = useQueryClient()
  return useMutation(logout, {
    onSuccess: () => {
      removeToken()
      queryClient.invalidateQueries(currentUserKey)
      router.push({ pathname })
    },
  })
}

export const useUpdateCustomer = () => {
  const queryClient = useQueryClient()
  return useMutation(updateUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(currentUserKey)
    },
  })
}

export const useUpdatePassword = () => useMutation(updatePassword)

export const useUpdatePassForgot = () => useMutation(updatePassForgot)

export const useForgotPassword = () => useMutation(forgotPassword)

export const useVerifyEmail = () => useMutation(verifyEmail)

export const useVerifyForgotPass = () => useMutation(verifyForgotPass)

export const useIdentityVerification = () => useMutation(identityVerification)
