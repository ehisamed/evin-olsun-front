"use client"

import { ChangeLocationDialog } from '@/features/change-location/ui/ChangeLocationDialog'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/components/ui/accordion'
import { Button } from '@/shared/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/shared/components/ui/drawer'
import { ScrollArea } from '@/shared/components/ui/scroll-area'
import { LogOut, Menu } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'

const BurgerMenu = () => {
  const isDesctop = useMediaQuery("(min-width: 768px)")
  const t = useTranslations('HomePage');

  return isDesctop ? <div>"Desctop"</div> :

    <Drawer direction='left'>
      <DrawerTrigger>
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="">
        <ScrollArea className='max-h-screen p-5'>
          <p className='text-lg font-semibold mb-1.5'>Menu</p>
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="rent">
              <AccordionTrigger className="text-sm font-500 py-3">{t('mobileMenu.rent.title')}</AccordionTrigger>
              <AccordionContent className="">
                <MenuLink href="/" label={t('mobileMenu.rent.apartments')} />
                <MenuLink href="/" label={t('mobileMenu.rent.houses')} />
                <MenuLink href="/" label={t('mobileMenu.rent.rooms')} />
                <MenuLink href="/" label={t('mobileMenu.rent.privateHouses')} />
                <MenuLink href="/" label={t('mobileMenu.rent.villas')} />
                <MenuLink href="/" label={t('mobileMenu.rent.commercial')} />
                <MenuLink href="/" label={t('mobileMenu.rent.studios')} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sale">
              <AccordionTrigger className="text-sm font-500 py-4">{t('mobileMenu.sale.title')}</AccordionTrigger>
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
          <div className='flex items-center justify-between py-4 pt-0'>
            <p className='text-sm font-400'>{t('mobileMenu.changeCity')}</p>
            <ChangeLocationDialog className='h-6 text-xs gap-0.5 px-0.5'/>
          </div>
          <div className='flex flex-col gap-4 py-4 pt-0'>
            <Link href='/' className='text-sm'>{t('mobileMenu.account.signIn')}</Link>
            <Link href='/' className='text-sm'>{t('mobileMenu.account.signUp')}</Link>
            <div className='flex items-center gap-2'>
              <LogOut size={18} />
              <Link href='/' className='text-sm font-400'>{t('mobileMenu.account.logout')}</Link>
            </div>
          </div>
        </ScrollArea>

      </DrawerContent>
    </Drawer>

}

export default BurgerMenu

const MenuLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="block py-2 text-sx hover:underline">
    {label}
  </Link>
)