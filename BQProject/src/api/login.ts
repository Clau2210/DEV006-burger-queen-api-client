import { instance } from './base.api'

const endpoint = 'login'

export const login = async (username: string, password: string) => {
  return await instance.post(endpoint, {
    'email': username,
    'password': password
  })
}