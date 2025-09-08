'use client'

import Link from 'next/link'
import { Equal, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { ROUTE } from '@/constants/routes'
import { useEffect, useState } from 'react'

const menuItems = [
  { name: 'Home', href: ROUTE.HOME },
  { name: 'All Products', href: ROUTE.ALL_PRODUCTS },
  { name: 'Cart', href: ROUTE.CART },
  { name: 'About', href: ROUTE.ABOUT },
]

export const Navbar = () => {
  const [menuState, setMenuState] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <header>
      <nav
        data-state={menuState && 'active'}
        className="fixed left-1/2 -translate-x-1/2 z-20 px-2 container mx-auto"
      >
        <div className={cn('mx-auto bg-background pt-2 max-w-8xl px-4 md:px-8 transition-all duration-300', isScrolled && 'mt-2 pt-0 bg-background/50 max-w-6xl rounded-2xl border backdrop-blur-lg')}>
          <div className="relative flex flex-wrap items-center justify-between gap-4 lg:gap-0 py-2">

            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href={ROUTE.HOME}
                aria-label="home"
                className="flex gap-2 items-center"
              >
                <h3 className='font-logo text-xl font-bold'>
                  E-<span className="bg-gradient-to-l from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">Com</span>
                </h3>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                <Equal className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="hover:underline hover:underline-offset-2 hover:text-primary block duration-150">
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-4 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-4 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-4 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="hover:underline hover:underline-offset-2 block duration-150">
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit">
                <Button size="sm">
                  <span>Login</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header >
  )
};