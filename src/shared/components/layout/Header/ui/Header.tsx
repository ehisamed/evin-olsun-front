'use client'

import React, { memo } from 'react'
import { CircleUserRound, LogIn, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ChangeLocationDialog } from '@/features/change-location/ui/ChangeLocationDialog';
import LocaleSwitcher from '@/features/change-language/ui/LocalSwitcher';
import ThemeToggle from '@/features/theme-toggle/ui/ThemeToggle';
import { Button } from '@/shared/components/ui/button';
import BurgerMenu from './BurgerMenu';
import { useRouter } from 'next/navigation';

type Props = {
  theme?: string;
}

const Header = ({ theme }: Props) => {
  const t = useTranslations('HomePage');
  const router = useRouter();
  return (
    <div className='flex w-full mx-auto gap-2 items-center 2xl:max-w-[1536px] bg-white dark:bg-neutral-950 px-4 py-4 border-b border-gray-300 
        dark:border-neutral-800 sm:py-4 sm:px-5'>

      <BurgerMenu theme={theme} />

      <ChangeLocationDialog className="gap-0 ml-3 rounded-2xl" />

      <LocaleSwitcher className='hidden md:flex' />

      <div className='hidden md:flex items-center'>

        <Button variant='link' size='sm' className='transition-all duration-300'>
          <Link href='/home'>
            {t('navbar.newBuildings')}
          </Link>
        </Button>

        <Button variant='link' size='sm' className=' transition-all duration-300'>
          <Link href='/home'>
            {t('navbar.housesForRent')}
          </Link>
        </Button>

        <Button variant='link' size='sm' className='hidden md:flex transition-all duration-300'>
          <Link href='/home'>
            {t('navbar.housesForSale')}
          </Link>
        </Button>

      </div>
      <div className='flex gap-2 ml-auto items-center'>
        <Button
          variant='ghost'
          size='sm'
          onClick={() => router.push('/auth/login')}
          className='hover:bg-blue-50 text-lg cursor-pointer dark:text-blue-500 dark:sm:text-white text-blue-500 md:text-black sm:text-sm transition-colors duration-150'
        >
          <LogIn />
          {t('navbar.auth.signIn')}
        </Button>

        <Button
          variant='default'
          size='sm'
          onClick={() => router.push('/auth/signup')}
          className='bg-blue-500 hover:bg-blue-600 transition-colors duration-150 items-center hidden sm:flex  
                         cursor-pointer dark:text-white'
        >
          <CircleUserRound />
          {t('navbar.auth.signUp')}
        </Button>

        <ThemeToggle className='hidden md:flex shadow-none' />

      </div>
    </div>
  )
}

export default memo(Header)