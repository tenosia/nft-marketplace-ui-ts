import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Images from '../../public/images/Images'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useState } from 'react'
export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <nav className="bg-white shadow dark:bg-[#111827]">
        <div className="container mx-auto px-6 py-4">
          <div className="jus md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-gray-700">
                <Link href="/">
                  <a>
                    <Image src={Images.logo} alt="Logo" />
                  </a>
                </Link>
              </div>

              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                  onClick={() => setOpen(!open)}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 md:flex md:items-center md:justify-between">
              <div className="-mx-4 flex flex-col md:mx-8 md:flex-row md:items-center">
                <input
                  type="text"
                  placeholder="Search Items"
                  className="1px solid silver my-4 rounded-xl border bg-transparent p-1.5 text-white md:my-0"
                />
              </div>
              <div className="cursor-pointer">
                <span className="text-white">
                  Discover <ArrowDropDownIcon />{' '}
                </span>
              </div>
              <Link href="/collection">
                <a>
                  <span className="text-white">Collection</span>
                </a>
              </Link>
              <div></div>

              <div className="mt-4 flex items-center md:mt-0">
                <button
                  className="mx-4 hidden transform text-gray-600 transition-colors duration-200 hover:text-gray-700 focus:text-gray-700 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400 md:block"
                  aria-label="show notifications"
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="px-2">
                  <ConnectButton />
                </div>
                <div className="rounded-full ">
                  <Image
                    src={Images.profile}
                    width="40"
                    height="40"
                    className="rounded-full "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
