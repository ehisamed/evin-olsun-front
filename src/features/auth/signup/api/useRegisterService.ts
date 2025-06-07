// src/features/auth/signup/api/useRegisterService.ts

import { SignupFormData } from "../model/useValidateSignupForm"
import { useMutation} from '@tanstack/react-query'
import axios from 'axios'
import { UseFormReturn } from "react-hook-form"

export const useRegisterService = (form: UseFormReturn<SignupFormData>) => {
  return useMutation({
    mutationFn: async (data: SignupFormData) => {
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