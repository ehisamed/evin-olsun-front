// src/app/[locale]/auth/login/page.tsx

'use client'

import LoginWidget from '@/widgets/auth/login'
import React, { useEffect, useState } from 'react'
import { TailSpin } from 'react-loader-spinner'

const LoginPage = () => {
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


  return <LoginWidget />

}

export default LoginPage