// src/features/auth/signup/model/useValidateSignupForm.ts

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './signUpSchema'
import { SignUpFormData } from '../types'

const useValidateSignupForm = (t: (key: string) => string) => {
  return useForm<SignUpFormData>({
    resolver: zodResolver(schema(t)),
    defaultValues: {
      email: '',
      password: '',
      terms: false,
    },
  })
}

export default useValidateSignupForm