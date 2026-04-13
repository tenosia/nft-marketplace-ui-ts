import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Images from '../../public/images/Images'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useTheme } from '@mui/material/styles'
import { useCallback, useState, type MouseEvent } from 'react'

const discoverLinks = [
  { href: '/', label: 'Home' },
  { href: '/#bids', label: 'Live auctions' },
  { href: '/#creators', label: 'Creators' },
] as const

export default function Header() {
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [discoverAnchor, setDiscoverAnchor] = useState<null | HTMLElement>(null)

  const closeDiscover = useCallback(() => setDiscoverAnchor(null), [])
  const openDiscover = useCallback((event: MouseEvent<HTMLElement>) => {
    setDiscoverAnchor(event.currentTarget)
  }, [])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  const searchField = (
    <Box
      component="input"
      type="search"
      placeholder="Search items"
      aria-label="Search items"
      sx={{
        my: { xs: 0, md: 0 },
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
  )

  return (
    <Box
      component="nav"
      aria-label="Main navigation"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: (t) => t.zIndex.appBar,
        bgcolor: theme.tenosia.background,
        boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: theme.layout.contentWidth,
          px: { xs: 2, sm: 3 },
          py: 2,
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
          <Box className="text-xl font-semibold" sx={{ flexShrink: 0 }}>
            <Link href="/" passHref>
              <a href="/" aria-label="NFT marketplace home">
                <Image src={Images.logo} alt="" priority />
              </a>
            </Link>
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            spacing={{ xs: 1, md: 2 }}
            sx={{
              display: { xs: 'none', md: 'flex' },
              flex: 1,
              minWidth: 0,
              justifyContent: 'flex-end',
            }}
          >
            <Box sx={{ flex: '1 1 auto', minWidth: 0, maxWidth: 280 }}>{searchField}</Box>

            <Stack direction="row" alignItems="center" spacing={1} sx={{ flexShrink: 0 }}>
              <Button
                type="button"
                variant="text"
                endIcon={<ArrowDropDownIcon />}
                onClick={openDiscover}
                aria-controls={discoverAnchor ? 'discover-menu' : undefined}
                aria-expanded={Boolean(discoverAnchor)}
                aria-haspopup="true"
                sx={{ color: 'text.primary', textTransform: 'none', fontWeight: 600 }}
              >
                Discover
              </Button>
              <Menu
                id="discover-menu"
                anchorEl={discoverAnchor}
                open={Boolean(discoverAnchor)}
                onClose={closeDiscover}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                MenuListProps={{ 'aria-labelledby': undefined }}
                PaperProps={{
                  sx: { mt: 1, minWidth: 200, bgcolor: 'background.paper' },
                }}
              >
                {discoverLinks.map((item) => (
                  <Link key={item.href} href={item.href} passHref>
                    <MenuItem component="a" onClick={closeDiscover}>
                      {item.label}
                    </MenuItem>
                  </Link>
                ))}
              </Menu>

              <Link href="/collection" passHref>
                <Box
                  component="a"
                  href="/collection"
                  sx={{
                    color: 'text.primary',
                    typography: 'body2',
                    fontWeight: 600,
                    textDecoration: 'none',
                    px: 1,
                    '&:hover': { color: 'primary.light' },
                  }}
                >
                  Collection
                </Box>
              </Link>

              <Button
                type="button"
                variant="text"
                sx={{
                  color: 'text.secondary',
                  minWidth: 0,
                  p: 1,
                }}
                aria-label="Notifications"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
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

              <Box sx={{ px: 0.5 }}>
                <ConnectButton />
              </Box>
              <Box className="rounded-full" sx={{ flexShrink: 0 }}>
                <Image
                  src={Images.profile}
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="Profile"
                />
              </Box>
            </Stack>
          </Stack>

          <IconButton
            type="button"
            color="inherit"
            edge="end"
            aria-label="Open menu"
            sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            onClick={() => setMobileOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={closeMobile}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 300,
            maxWidth: '100%',
            bgcolor: 'background.default',
            pt: 1,
          },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ px: 1 }}>
          <IconButton type="button" aria-label="Close menu" onClick={closeMobile} size="large">
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider />
        <Box sx={{ px: 2, py: 2 }}>{searchField}</Box>
        <List dense disablePadding>
          {discoverLinks.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <ListItemButton component="a" onClick={closeMobile}>
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
              </ListItemButton>
            </Link>
          ))}
          <Link href="/collection" passHref>
            <ListItemButton component="a" onClick={closeMobile}>
              <ListItemText primary="Collection" primaryTypographyProps={{ fontWeight: 600 }} />
            </ListItemButton>
          </Link>
        </List>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ px: 2, pb: 2 }}>
          <ConnectButton />
        </Box>
      </Drawer>
    </Box>
  )
}
