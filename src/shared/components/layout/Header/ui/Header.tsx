import React from 'react'
import { CircleUserRound, LogIn, MapPin } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ChangeLocationDialog } from '@/features/change-location/ui/ChangeLocationDialog';
import LocaleSwitcher from '@/features/change-language/ui/LocalSwitcher';
import ThemeToggle from '@/features/theme-toggle/ui/ThemeToggle';
import { Button } from '../../../ui/button'
import BurgerMenu from './BurgerMenu';


const Header = () => {
  const t = useTranslations('HomePage')
  return (
    <div className='flex w-full mx-auto gap-2 items-center 2xl:max-w-[1536px] bg-white dark:bg-neutral-950 px-4 py-2 border-b border-gray-300 
        dark:border-neutral-800 sm:py-4 sm:px-5'>
      <ChangeLocationDialog className="hidden md:flex" />
      <BurgerMenu />
      <LocaleSwitcher />
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
        <Button variant='ghost' size='sm' className='hover:bg-blue-50 cursor-pointer transition-colors duration-150'>
          <LogIn />
          {t('navbar.auth.signIn')}
        </Button>
        <Button variant='default' size='sm' className='bg-blue-500 hover:bg-blue-600 transition-colors duration-150 items-center hidden xsm:flex  
                         cursor-pointer dark:text-white'>
          <CircleUserRound />
          {t('navbar.auth.signUp')}
        </Button>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Header