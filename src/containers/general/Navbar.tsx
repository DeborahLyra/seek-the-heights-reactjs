'use client'
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import CrossIcon from '../../../public/cross-icon.svg'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation('header');

  useEffect(() => {
    console.log('Current language:', i18n.language);
    console.log('Available languages:', i18n.languages);
    console.log('Header translations:', i18n.getResourceBundle(i18n.language, 'header'));
  }, [i18n.language]);

  return (
    <>
      <header className="bg-light-gray fixed w-full">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
          <div className="flex lg:flex-1">
            <a href='/#banner' className="-m-1.5 p-1.5 cursor-pointer">
              <span className="sr-only">Marcus</span>
              <img src={CrossIcon} className="h-16" />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
            >
              <span className="sr-only">Abrir menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">

            <a href='/#examplesOfFaith' className="cursor-pointer text-md font-light text-secondary hover:text-dusty-orange transition-colors">
              {t('navbar.faithExamples')}
            </a>
            <a href='/#miracles' className="cursor-pointer text-md font-light text-secondary hover:text-dusty-orange transition-colors">
              {t('navbar.miracles')}
            </a>
            <a href='/#linesAndSky' className="cursor-pointer text-md font-light text-secondary hover:text-dusty-orange transition-colors">
              {t('navbar.linesAndSky')}
            </a>


            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={() => i18n.changeLanguage('pt')}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all
                ${i18n.language === 'pt'
                    ? 'bg-dusty-orange text-white shadow-md'
                    : 'bg-white text-secondary border border-gray-200 hover:bg-gray-50'}
              `}
              >
                <span className="text-lg">🇧🇷</span>
                <span>Português</span>
              </button>
              <button
                onClick={() => i18n.changeLanguage('en')}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-all
                ${i18n.language === 'en'
                    ? 'bg-dusty-orange text-white shadow-md'
                    : 'bg-white text-secondary border border-gray-200 hover:bg-gray-50'}
              `}
              >
                <span className="text-lg">🇺🇸</span>
                <span>English</span>
              </button>
            </div>
          </PopoverGroup>
        </nav>

        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary/10">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-light-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                <span className="sr-only">Fechar menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href='/#faithExamples'
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light text-secondary hover:bg-white/20 hover:text-gray-500 cursor-pointer transition-colors"
                  >
                    {t('avbar.faithExamples')}
                  </a>
                  <a
                    href='/#miracles'
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light text-secondary hover:bg-white/20 hover:text-gray-500 cursor-pointer transition-colors"
                  >
                    {t('navbar.miracles')}
                  </a>
                  <a
                    href='/#linesAndSky'
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-light text-secondary hover:bg-white/20 hover:text-gray-500 cursor-pointer transition-colors"
                  >
                    {t('navbar.linesAndSky')}
                  </a>

                  <div className="flex flex-col gap-2 pt-6">
                    <button
                      onClick={() => {
                        i18n.changeLanguage('pt');
                        setMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 rounded-md text-sm font-medium flex items-center gap-3 justify-center transition-all
                      ${i18n.language === 'pt'
                          ? 'bg-dusty-orange text-white shadow-md'
                          : 'bg-white text-secondary border border-gray-200 hover:bg-gray-50'}
                    `}
                    >
                      <span className="text-xl">🇧🇷</span>
                      <span>Português</span>
                    </button>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('en');
                        setMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 rounded-md text-sm font-medium flex items-center gap-3 justify-center transition-all
                      ${i18n.language === 'en'
                          ? 'bg-dusty-orange text-white shadow-md'
                          : 'bg-white text-secondary border border-gray-200 hover:bg-gray-50'}
                    `}
                    >
                      <span className="text-xl">🇺🇸</span>
                      <span>English</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="h-24" />
    </>
  );
}