import { useTranslations } from 'next-intl'
import React from 'react'

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