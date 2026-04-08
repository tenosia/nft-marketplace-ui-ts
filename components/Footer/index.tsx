import { Box, Container, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import Images from '../../public/images/Images'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TelegramIcon from '@mui/icons-material/Telegram'
import TwitterIcon from '@mui/icons-material/Twitter'
import { useTheme } from '@mui/material/styles'

export default function Footer() {
  const theme = useTheme()
  const muted = { color: theme.tenosia.muted }

  return (
    <Box sx={{ bgcolor: theme.tenosia.background, py: '8vh' }}>
      <Box sx={{ borderTop: '0.5px solid', borderColor: 'divider' }}>
        <Container>
          <Grid container className="py-[15vh]">
            <Grid item md={2.4}>
              <Box>
                <Image src={Images.logo} alt="" />
              </Box>
              <Box className="pt-2">
                <Stack spacing={1}>
                  <Box component="span" sx={{ ...muted, display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
                    <FacebookIcon fontSize="small" /> Facebook
                  </Box>
                  <Box component="span" sx={{ ...muted, display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
                    <YouTubeIcon fontSize="small" /> Youtube
                  </Box>
                  <Box component="span" sx={{ ...muted, display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
                    <TelegramIcon fontSize="small" /> Telegram
                  </Box>
                  <Box component="span" sx={{ ...muted, display: 'inline-flex', alignItems: 'center', gap: 0.5 }}>
                    <TwitterIcon fontSize="small" /> Twitter
                  </Box>
                </Stack>
              </Box>
              <Box className="py-3" />
            </Grid>
            <Grid item md={2.4}>
              <Box component="h2" sx={{ typography: 'subtitle1', color: 'text.primary', m: 0 }}>
                Getting Started
              </Box>
              <Stack spacing={1} className="py-2">
                {['Installation', 'Release Notes', 'Upgrade Guide', 'Browser Support', 'Editor Support', 'Dark Mode'].map(
                  (label) => (
                    <Box key={label} component="span" sx={muted}>
                      {label}
                    </Box>
                  ),
                )}
              </Stack>
            </Grid>
            <Grid item md={2.4}>
              <Box component="h2" sx={{ typography: 'subtitle1', color: 'text.primary', m: 0 }}>
                Explore
              </Box>
              <Stack spacing={1} className="py-2">
                {['Design Feature', 'Prototyping', 'Design System', 'Pricing', 'Customer', 'Security'].map((label) => (
                  <Box key={label} component="span" sx={muted}>
                    {label}
                  </Box>
                ))}
              </Stack>
            </Grid>

            <Grid item md={2.4}>
              <Box component="h2" sx={{ typography: 'subtitle1', color: 'text.primary', m: 0 }}>
                Resource
              </Box>
              <Stack spacing={1} className="py-2">
                {['Best Practice', 'Support', 'Developers', 'Learn Design', "What's New", 'Release'].map((label) => (
                  <Box key={label} component="span" sx={muted}>
                    {label}
                  </Box>
                ))}
              </Stack>
            </Grid>

            <Grid item md={2.4}>
              <Box component="h2" sx={{ typography: 'subtitle1', color: 'text.primary', m: 0 }}>
                Community
              </Box>
              <Stack spacing={1} className="py-2">
                {['Discussion Forums', 'Code of Conduct', 'Community Resources', 'Contributing', 'Concurrent mode', 'API Reference'].map(
                  (label) => (
                    <Box key={label} component="span" sx={muted}>
                      {label}
                    </Box>
                  ),
                )}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}
