import { Box, Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Images from '../../public/images/Images'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useTheme } from '@mui/material/styles'

export default function Header() {
  const theme = useTheme()

  return (
    <Box
      component="nav"
      sx={{
        bgcolor: theme.tenosia.background,
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="jus md:flex md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold">
              <Link href="/">
                <a>
                  <Image src={Images.logo} alt="Logo" />
                </a>
              </Link>
            </div>

            <div className="flex md:hidden">
              <Button
                type="button"
                variant="text"
                sx={{ color: 'text.secondary', minWidth: 0, p: 1 }}
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div className="flex-1 md:flex md:items-center md:justify-between">
            <div className="-mx-4 flex flex-col md:mx-8 md:flex-row md:items-center">
              <Box
                component="input"
                type="text"
                placeholder="Search Items"
                sx={{
                  my: { xs: 2, md: 0 },
                  width: 1,
                  maxWidth: 280,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  px: 1.5,
                  py: 0.75,
                  outline: 'none',
                  '&::placeholder': { color: 'text.secondary' },
                }}
              />
            </div>
            <div className="cursor-pointer">
              <Box
                component="span"
                sx={{ color: 'text.primary', display: 'inline-flex', alignItems: 'center' }}
              >
                Discover <ArrowDropDownIcon />
              </Box>
            </div>
            <Link href="/collection">
              <a>
                <Box component="span" sx={{ color: 'text.primary' }}>
                  Collection
                </Box>
              </a>
            </Link>
            <div />

            <div className="mt-4 flex items-center md:mt-0">
              <Button
                variant="text"
                sx={{
                  display: { xs: 'none', md: 'inline-flex' },
                  color: 'text.secondary',
                  minWidth: 0,
                  mx: 2,
                }}
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
              </Button>

              <div className="px-2">
                <ConnectButton />
              </div>
              <div className="rounded-full">
                <Image
                  src={Images.profile}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}
