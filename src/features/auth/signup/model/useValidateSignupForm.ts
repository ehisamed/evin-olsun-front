// src/features/auth/signup/model/useValidateSignupForm.ts

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export type SignupFormData = {
  email: string
  password: string
  terms: boolean
}

export const useValidateSignupForm = (t: (key: string) => string) => {
  const schema = z.object({
    email: z.string()
      .nonempty(t('emailRequired'))
      .email(t('emailInvalid'))
      .refine((val) => {
        const [localPart, domain] = val.split('@')
        return domain === 'gmail.com' ? localPart.length >= 6 : true
      }, {
        message: t('emailGmailMinChars'),
      }),
    password: z.string()
      .nonempty(t('passwordRequired'))
      .min(6, t('passwordMin'))
      .regex(/^(?=.*[A-Za-z])(?=.*\d).{6,}$/, t('passwordPattern')),
    terms: z.boolean().refine(val => val === true, {
      message: t('termsRequired'),
    }),
  })

  return useForm<SignupFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      terms: false,
    },
  })
}