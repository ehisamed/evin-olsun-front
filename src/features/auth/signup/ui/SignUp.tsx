// src/features/auth/signup/ui/SignUp.tsx

'use client'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Checkbox } from '@/shared/components/ui/checkbox'
import { Label } from '@/shared/components/ui/label'
import { Separator } from '@/shared/components/ui/separator'
import { ArrowLeft, Eye, EyeClosed, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import ThemeToggle from '@/features/theme-toggle/ui/ThemeToggle'
import { useValidateSignupForm } from '../model/useValidateSignupForm'
import { useRegisterService } from '../api/useRegisterService'
import { Controller } from 'react-hook-form'
import Link from 'next/link'
import { useState } from 'react'
import { useSafeTranslations } from '@/shared/hooks/useSafeTranslations'

export default function SignUpForm() {
  const t = useSafeTranslations('SignupPage');
  const tForm = useSafeTranslations('SignupPage.SignUpForm')
  const router = useRouter();
  const form = useValidateSignupForm(tForm);
  const registerMutation = useRegisterService(form)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = form.handleSubmit((data) => {
    registerMutation.mutate(data)
  })

  return (
    <div className="w-screen h-screen flex items-center justify-center px-4">
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
          <h1 className="text-2xl font-bold text-center">{t('createAccount')}</h1>
          <p className="text-muted-foreground text-center mt-3">
            {t('description')}
          </p>
        </div>

        <Button variant="outline" className="w-full h-12 mt-2 cursor-pointer " size='lg' >
          <span className="mr-2">🌐</span> {t('signInWithGoogle')}
        </Button>

        <div className="flex items-center gap-4 my-1">
          <Separator className="flex-1" />
          <span className="text-base text-muted-foreground">{t('or')}</span>
          <Separator className="flex-1" />
        </div>

        <form className="flex flex-col gap-4.5" onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email" className='mb-1 text-base'>Email</Label>
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
                className='py-6 shadow-none text-base pr-20'
                {...form.register('password')}
              />
              <Button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-2 top-1/2 pd-0 -translate-y-1/2 h-8 w-8 text-sm"
                variant="ghost"
              >
                {showPassword ? <EyeClosed size={32}/> : <Eye width={32} height={32}/>}
              </Button>
            </div>
            {form.formState.errors.password && (
              <p className="text-sm text-red-500 mt-1">{form.formState.errors.password.message}</p>
            )}
          </div>

          <div className="flex flex-col space-x-2">
            <div className='flex items-center space-x-2'>
              <Controller
                name="terms"
                control={form.control}
                render={({ field }) => (
                  <Checkbox
                    id="terms"
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                    className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 dark:data-[state=checked]:bg-blue-500 dark:text-white h-6 w-6 shadow-none"
                  />
                )}
              />
              <Label htmlFor="terms" className="leading-none text-base">
                {t('termsLabel')} <a href="#" className="underline text-blue-500 hover:text-blue-600 transition-colors duration-150">{t('terms')}</a>
              </Label>
            </div>
            {form.formState.errors.terms && (
              <p className="text-sm text-red-500 mt-1">{form.formState.errors.terms.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={registerMutation.isPending}
            className="w-full bg-blue-500 hover:bg-blue-600 dark:text-white transition-colors duration-150 cursor-pointer mt-2 py-6 md:py-5 text-lg md:text-sm">
            {registerMutation.isPending ? 'Загрузка...' : t('signUp')}
          </Button>
        </form>


        <p className="text-base text-center font-medium mt-4">
          {t('alreadyHaveAccount')} <Link href='/auth/login' className="underline text-blue-500 hover:text-blue-600 transition-colors duration-150 pb-5">{t('signIn')}</Link>
        </p>
      </div>
    </div>
  )
}