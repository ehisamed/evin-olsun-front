// src/app/[locale]/auth/signup/layout.tsx

import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import React from 'react'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const locale = resolvedParams.locale

  const translations = await import(`../../../../../messages/${locale}.json`)

  return {
    title: translations.SignupPage?.title || 'Sign Up',
    description: translations.SignupPage?.description || 'Create your account',
  }
}

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {

  const t1 = useTranslations('SignupPage')
  const t2 = useTranslations('SignupPage.SignUpForm')

  // SignupPage
  t1('createAccount')
  t1('description')
  t1('signInWithGoogle')
  t1('or')
  t1('passwordLabel')
  t1('termsLabel')
  t1('terms')
  t1('minimumChars')
  t1('signUp')
  t1('alreadyHaveAccount')
  t1('signIn')

  // SignupPage.SignUpForm
  t2('emailRequired')
  t2('emailInvalid')
  t2('emailGmailMinChars')
  t2('passwordRequired')
  t2('passwordMin')
  t2('passwordPattern')
  t2('termsRequired')



  return (
    <>{children}</>
  )
}

export default SignUpLayout