import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import React from 'react'


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale

  const translations = await import(`../../../../../messages/${locale}.json`)

  return {
    title: translations.SignupPage?.title || 'Login',
    description: translations.SignupPage?.description || 'Login your account',
  }
}

const LoginLayout = ({ children }: { children: React.ReactNode }) => {

  const t1 = useTranslations('LoginPage')
  const t2 = useTranslations('SignupPage.SignUpForm')

  // LoginPage
  t1('loginAccount')
  t1('description')
  t1('signInWithGoogle')
  t1('or')
  t1('passwordLabel')
  t1('rememberMe')
  t1('forgotPassword')
  t1('signIn')
  t1('dontHaveAccount')
  t1('signUp')

  // LoginPage.LoginForm
  t2('emailRequired')
  t2('passwordRequired')

  return (
    <>{children}</>
  )
}

export default LoginLayout