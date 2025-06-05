"use client";

import React from 'react'
import HeaderView from '@/shared/components/layout/Header/ui/Header'
import useTheme from '@/features/theme-toggle/model/useTheme'

const Header = () => {
  const {theme} = useTheme()
  return (
    <HeaderView theme={theme}/>
  )
}

export default Header