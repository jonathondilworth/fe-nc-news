import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles' },
    { name: 'Topics', href: '/topics' },
];

const Nav = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex flex-1">
              <div className="hidden lg:flex lg:gap-x-12">
                {navigation.map((item) => (
                  <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">NC News</span>
              {/* TODO: Switch out for custom logo & add alt text */}
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </Link>
            <div className="flex flex-1 justify-end">
              <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6">
              <div className="flex items-center justify-between">
                <div className="flex flex-1">
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">NC News</span>
                  <img
                    className="h-8 w-auto"
                    // TODO: switch out for custom logo
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    // TODO: add alt image text
                    alt=""
                  />
                </Link>
                <div className="flex flex-1 justify-end">
                  <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="mt-6 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      );

};

export default Nav;