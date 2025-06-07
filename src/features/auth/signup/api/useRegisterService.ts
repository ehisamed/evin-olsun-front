// src/features/auth/signup/api/useRegisterService.ts

import { useMutation} from '@tanstack/react-query'
import { UseFormReturn } from "react-hook-form"
import axios from 'axios'
import { SignUpFormData } from '../types'

const useRegisterService = (form: UseFormReturn<SignUpFormData>) => {
  return useMutation({
    mutationFn: async (data: SignUpFormData) => {
      const response = await axios.post('/api/auth/register', data)
      return response.data
    },
    onSuccess: () => {
      console.log('Вы успешно зарегистрировались!')
    },
    onError: (err: any) => {
      const message = err?.response?.data?.message || 'Ошибка при регистрации'
      console.log(message)

      if (message.toLowerCase().includes('email')) {
        form.setError('email', {
          type: 'server',
          message,
        })
      }
    },
  })
}

export default useRegisterService