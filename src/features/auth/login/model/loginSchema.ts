import { z } from 'zod'

export const schema = (t: (key: string) => string) => z.object({
  email: z.string()
  .nonempty(t('emailRequired'))
  .email(t('emailInvalid')),

  password: z.string()
  .nonempty(t('passwordRequired')),

  remember: z.boolean()
})

export type LoginFormSchema = ReturnType<typeof schema>