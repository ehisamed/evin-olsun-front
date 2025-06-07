// src/app/[locale]/auth/signup/page.tsx

'use client'

import SignUpWidget from '@/widgets/auth/signup'
import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'

const SignupPage = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 500)
    return () => clearTimeout(timer)
  }, [])

  if (!isReady)
    return (
      <div
      className='flex justify-center items-center h-screen text-xl'
      >
        <TailSpin
          height={50}
          width={50}
          color="#3b82f6"
          ariaLabel="loading"
        />
      </div>
    )

  return <SignUpWidget />
}

export default SignupPage