import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import Images from '../../public/images/Images'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TelegramIcon from '@mui/icons-material/Telegram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { useTheme } from '@mui/material/styles'
import type { ReactNode } from 'react'

type FooterLinkItem = {
  label: string
  href: string
}

const footerColumns: { title: string; links: FooterLinkItem[] }[] = [
  {
    title: 'Marketplace',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Collection', href: '/collection' },
      { label: 'Live auctions', href: '/#bids' },
      { label: 'Creators', href: '/#creators' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Featured', href: '/#hero' },
      { label: 'Videos', href: '/#video' },
      { label: 'Earn crypto', href: '/#crypto' },
      { label: 'Newsletter', href: '/#contact' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: 'https://github.com' },
      { label: 'RainbowKit', href: 'https://www.rainbowkit.com' },
      { label: 'wagmi', href: 'https://wagmi.sh' },
      { label: 'Support', href: '/#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy policy', href: '#' },
      { label: 'Terms of service', href: '#' },
    ],
  },
]

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com',
    Icon: FacebookIcon,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com',
    Icon: YouTubeIcon,
  },
  {
    label: 'Telegram',
    href: 'https://telegram.org',
    Icon: TelegramIcon,
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com',
    Icon: TwitterIcon,
  },
] as const

function FooterNavLink({ href, children }: { href: string; children: ReactNode }) {
  const theme = useTheme()
  const sx = {
    color: theme.tenosia.muted,
    typography: 'body2',
    textDecoration: 'none',
    display: 'inline-block',
    '&:hover': { color: 'primary.light' },
  } as const

  const isExternal =
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:')

  if (isExternal) {
    return (
      <Box
        component="a"
        href={href}
        sx={sx}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </Box>
    )
  }

  return (
    <Link href={href} passHref>
      <Box component="a" href={href} sx={sx}>
        {children}
      </Box>
    </Link>
  )
}

export default function Footer() {
  const theme = useTheme()
  const year = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{ bgcolor: theme.tenosia.background, pt: { xs: 6, md: 8 }, pb: 4 }}
    >
      <Box sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
        <Container
          maxWidth={false}
          sx={{
            maxWidth: theme.layout.contentWidth,
            px: { xs: 2, sm: 3 },
            py: { xs: 6, md: 8 },
          }}
        >
          <Grid container spacing={{ xs: 4, md: 3 }}>
            <Grid item xs={12} md={4}>
              <Link href="/" passHref>
                <Box
                  component="a"
                  href="/"
                  aria-label="NFT marketplace home"
                  sx={{ display: 'inline-block' }}
                >
                  <Image src={Images.logo} alt="" />
                </Box>
              </Link>
              <Stack direction="row" spacing={0.5} sx={{ mt: 2 }}>
                {socialLinks.map(({ label, href, Icon }) => (
                  <IconButton
                    key={label}
                    component="a"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    size="small"
                    sx={{ color: 'text.secondary', '&:hover': { color: 'primary.light' } }}
                  >
                    <Icon fontSize="small" />
                  </IconButton>
                ))}
              </Stack>
            </Grid>

            {footerColumns.map((column) => (
              <Grid item xs={12} sm={6} md={2} key={column.title}>
                <Typography
                  component="h2"
                  variant="subtitle1"
                  sx={{ color: 'text.primary', fontWeight: 600, m: 0, mb: 1 }}
                >
                  {column.title}
                </Typography>
                <Stack
                  component="ul"
                  spacing={1}
                  sx={{ listStyle: 'none', p: 0, m: 0 }}
                >
                  {column.links.map((link) => (
                    <Box component="li" key={link.label}>
                      <FooterNavLink href={link.href}>{link.label}</FooterNavLink>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          <Divider sx={{ my: 4, borderColor: 'divider' }} />

          <Typography
            variant="body2"
            sx={{ color: theme.tenosia.muted, textAlign: 'center' }}
          >
            © {year} Tenosia NFT Marketplace. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
