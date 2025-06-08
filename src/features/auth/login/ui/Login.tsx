// src/features/auth/login/ui/Login.tsx

'use client'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Checkbox } from '@/shared/components/ui/checkbox'
import { Label } from '@/shared/components/ui/label'
import { Separator } from '@/shared/components/ui/separator'
import ThemeToggle from '@/features/theme-toggle/ui/ThemeToggle'
import { useSafeTranslations } from '@/shared/hooks/useSafeTranslations'
import { ArrowLeft, Eye, EyeClosed } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import useValidateLoginForm from '../model/useValidateLoginForm'
import useLoginService from '../api'
import Image from 'next/image'

export default function LoginForm() {
  const t = useTranslations('LoginPage');
  const tForm = useSafeTranslations('LoginPage.LoginForm')
  const router = useRouter()
  const form = useValidateLoginForm(tForm)
  const registerMutation = useLoginService(form)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = form.handleSubmit((data) => {
    registerMutation.mutate(data)
  })

  return (
    <div className="w-screen h-screen flex items-center overflow-x-hidden justify-center px-4">
      <div className="max-w-md w-full my-auto py-10">
        <div className='flex justify-between'>
          <Button
            onClick={() => router.back()}
            className='h-10 w-10 mb-10 bg-blue-500 hover:bg-blue-600 dark:text-white transition-colors duration-150 cursor-pointer'>
            <ArrowLeft />
          </Button>
          <ThemeToggle className='h-10 w-10 shadow-none' />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-center">{t('loginAccount')}</h1>
          <p className="text-muted-foreground text-center mt-3">
            {t('description')}
          </p>
        </div>

        <Button variant="outline" className="w-full h-12 mt-5 cursor-pointer" size='lg' onClick={() => window.location.href = 'http://localhost:3001/api/auth/google/login'}>
          <Image
            src="/static_icons/Google.svg"
            height={24}
            width={24}
            alt='fdf'
          />
          {t('signInWithGoogle')}
        </Button>

        <div className="flex items-center gap-4 my-5">
          <Separator className="flex-1" />
          <span className="text-base text-muted-foreground">{t('or')}</span>
          <Separator className="flex-1" />
        </div>

        <form className="flex flex-col gap-4.5" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email" className='mb-1 text-base'>{t('emailLabel')}</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              className='py-6 text-base shadow-none'
              {...form.register('email')}
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500 mt-1">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="password" className='mb-1 text-base'>{t('passwordLabel')}</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className='py-6 shadow-none text-base'
                {...form.register('password')}
              />
              <Button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 pd-0 -translate-y-1/2 h-8 w-8 text-sm"
                variant="ghost"
              >
                {showPassword ? <EyeClosed /> : <Eye />}
              </Button>
            </div>
            {form.formState.errors.password && (
              <p className="text-sm text-red-500 mt-1">{form.formState.errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Controller
                name='remember'
                control={form.control}
                render={({ field }) => (
                  <Checkbox
                    id="remember"
                    checked={field.value}
                    onCheckedChange={(cheked) => field.onChange(cheked === true)}
                    className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 dark:data-[state=checked]:bg-blue-500 dark:text-white h-6 w-6 shadow-none"
                  />
                )}
              />
              <Label htmlFor="remember" className="leading-none text-base">
                {t('rememberMe')}
              </Label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-600 underline">
              {t('forgotPassword')}
            </a>
          </div>

          <Button
            type="submit"
            disabled={registerMutation.isPending}
            className="w-full bg-blue-500 hover:bg-blue-600 dark:text-white transition-colors duration-150 cursor-pointer mt-2 py-6 md:py-5 text-lg md:text-sm"
          >
            {registerMutation.isPending ? 'Загрузка...' : t('signIn')}
          </Button>
        </form>

        <p className="text-base text-center font-medium mt-4">
          {t('dontHaveAccount')} <Link href="/auth/signup" className="underline text-blue-500 hover:text-blue-600 transition-colors duration-150">{t('signUp')}</Link>
        </p>
      </div>
    </div>
  )
}
