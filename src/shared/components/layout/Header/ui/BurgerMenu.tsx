"use client"

import LocaleSwitcher from '@/features/change-language/ui/LocalSwitcher'
import ThemeToggle from '@/features/theme-toggle/ui/ThemeToggle'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/components/ui/accordion'
import { Drawer, DrawerContent, DrawerTrigger } from '@/shared/components/ui/drawer'
import { ScrollArea } from '@/shared/components/ui/scroll-area'
import { LogOut, Menu } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React, { memo, useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

type Props = {
  theme?: string;
}

const BurgerMenu = ({ theme }: Props) => {
  const [hasMounted, setHasMounted] = useState(false);
  const isDesctop = useMediaQuery("(min-width: 768px)")
  const t = useTranslations('HomePage');

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted || isDesctop) return null;

  return (
    <Drawer direction='left'>
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="flex flex-col h-full">

        <ScrollArea className='flex-1 overflow-auto'>

          {/* // MobileMenu Title */}
          <p className='text-2xl font-semibold mb-1.5 px-5 py-5 border-b'>{t('mobileMenu.menu')}</p>

          <Accordion type="multiple" className="w-full">

            {/* // Rent */}
            <AccordionItem value="rent" className='border-0'>
              <AccordionTrigger className="text-xl font-500 py-3 px-5">{t('mobileMenu.rent.title')}</AccordionTrigger>
              <AccordionContent>
                <MenuLink href="/" label={t('mobileMenu.rent.apartments')} />
                <MenuLink href="/" label={t('mobileMenu.rent.houses')} />
                <MenuLink href="/" label={t('mobileMenu.rent.rooms')} />
                <MenuLink href="/" label={t('mobileMenu.rent.privateHouses')} />
                <MenuLink href="/" label={t('mobileMenu.rent.villas')} />
                <MenuLink href="/" label={t('mobileMenu.rent.commercial')} />
                <MenuLink href="/" label={t('mobileMenu.rent.studios')} />
              </AccordionContent>
            </AccordionItem>

            {/* // Sale */}
            <AccordionItem value="sale">
              <AccordionTrigger className="text-xl font-500 py-4 px-5">{t('mobileMenu.sale.title')}</AccordionTrigger>
              <AccordionContent className="">
                <MenuLink href="/" label={t('mobileMenu.sale.apartments')} />
                <MenuLink href="/" label={t('mobileMenu.sale.houses')} />
                <MenuLink href="/" label={t('mobileMenu.sale.lands')} />
                <MenuLink href="/" label={t('mobileMenu.sale.privateHouses')} />
                <MenuLink href="/" label={t('mobileMenu.sale.villas')} />
                <MenuLink href="/" label={t('mobileMenu.sale.lands')} />
                <MenuLink href="/" label={t('mobileMenu.sale.commercial')} />
                <MenuLink href="/" label={t('mobileMenu.sale.studios')} />
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          {/* // Interface language */}
          <div className='flex justify-between items-center px-5 focus:bg-gray-100 py-2'>
            <p className='text-lg'>{t('mobileMenu.interfaceLanguage')}</p>
            <LocaleSwitcher className='h-5 py-2' />
          </div>

          {/* // Account  */}
          <div className='flex flex-col py-4 pt-0'>
            <Link href='/auth/signup' className='text-lg px-5 flex sm:hidden text-blue-500 focus:bg-gray-100 py-2 dark:focus:bg-neutral-800'>{t('mobileMenu.account.signUp')}</Link>
            <Link href='/' className='text-lg gap-1.5 text-red-600 px-5 font-400 flex items-center focus:bg-gray-100 py-2 dark:focus:bg-neutral-800'>
              <LogOut size={18} />
              {t('mobileMenu.account.logout')}
            </Link>
          </div>
        </ScrollArea>

        {/* // Theme managment */}
        <div className="flex items-center gap-2 p-5 border-t mt-auto shrink-0">
          <ThemeToggle className='' />
          <p className='text-base font-medium'>
            {theme === 'light' ? t('mobileMenu.lightTheme') : t('mobileMenu.darkTheme')}
          </p>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default memo(BurgerMenu)

const MenuLink = React.memo(({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="block py-2 text-lg hover:underline px-5 text-neutral-900 dark:text-stone-200">
    {label}
  </Link>
))