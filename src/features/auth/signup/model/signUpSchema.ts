// src/features/auth/signup/model/signUpSchema.ts

import { z } from 'zod'

export const schema = (t: (key: string) => string) => z.object({
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

export type SignupFormSchema = ReturnType<typeof schema>


