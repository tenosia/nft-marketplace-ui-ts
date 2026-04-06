import { Box, Container, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import Images from '../../public/images/Images'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TelegramIcon from '@mui/icons-material/Telegram'
import TwitterIcon from '@mui/icons-material/Twitter'
export default function Footer() {
  return (
    <>
      <div className="bg-[#111827] py-[8vh]">
        <Box borderTop="0.5px solid white">
          <Container>
            <Grid container className="py-[15vh]">
              <Grid item md={2.4}>
                <Box>
                  <Image src={Images.logo} alt="" />
                </Box>
                <Box className="pt-2">
                  <Stack spacing={1}>
                    <span className="text-[#B5B8BD]">
                      {' '}
                      <FacebookIcon className="rounded-full" /> FaceBook
                    </span>
                    <span className="text-[#B5B8BD]">
                      {' '}
                      <YouTubeIcon className="rounded-full" /> Youtube
                    </span>
                    <span className="text-[#B5B8BD]">
                      {' '}
                      <TelegramIcon className="rounded-full" /> Telegram
                    </span>
                    <span className="text-[#B5B8BD]">
                      {' '}
                      <TwitterIcon className="rounded-full" /> Twitter
                    </span>
                  </Stack>
                </Box>
                <Box className="py-3"></Box>
              </Grid>
              <Grid item md={2.4}>
                <h1 className="text-lg text-white">Getting Started</h1>
                <Stack spacing={1} className="py-2">
                  <span className="text-[#B5B8BD]">Installation</span>
                  <span className="text-[#B5B8BD]">Release Notes</span>
                  <span className="text-[#B5B8BD]">Upgrade Guide</span>
                  <span className="text-[#B5B8BD]">Browser Suppport</span>
                  <span className="text-[#B5B8BD]">Editor Support</span>
                  <span className="text-[#B5B8BD]">Dark Mode</span>
                </Stack>
              </Grid>
              <Grid item md={2.4}>
                <h1 className="text-lg text-white"> Explore</h1>
                <Stack spacing={1} className="py-2">
                  <span className="text-[#B5B8BD]">Design Feature</span>
                  <span className="text-[#B5B8BD]">Prototyping</span>
                  <span className="text-[#B5B8BD]">Design System</span>
                  <span className="text-[#B5B8BD]">Pricing</span>
                  <span className="text-[#B5B8BD]">Customer </span>
                  <span className="text-[#B5B8BD]">Security</span>
                </Stack>
              </Grid>

              <Grid item md={2.4}>
                <h1 className="text-lg text-white"> Resource</h1>
                <Stack spacing={1} className="py-2">
                  <span className="text-[#B5B8BD]">Best Practice</span>
                  <span className="text-[#B5B8BD]">Support</span>
                  <span className="text-[#B5B8BD]">Developers</span>
                  <span className="text-[#B5B8BD]">Learn Design</span>
                  <span className="text-[#B5B8BD]">What's New </span>
                  <span className="text-[#B5B8BD]">Release</span>
                </Stack>
              </Grid>

              <Grid item md={2.4}>
                <h1 className="text-lg text-white"> Community</h1>
                <Stack spacing={1} className="py-2">
                  <span className="text-[#B5B8BD]">Discussion Forums</span>
                  <span className="text-[#B5B8BD]">Code of Conduct</span>
                  <span className="text-[#B5B8BD]">Community Resources</span>
                  <span className="text-[#B5B8BD]">Contributing</span>
                  <span className="text-[#B5B8BD]">Concurrent mode </span>
                  <span className="text-[#B5B8BD]">API Reference</span>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  )
}
