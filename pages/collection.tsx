import { Box, Container, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import Header from '../components/Header/Index'
import Images from '../public/images/Images'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import Link from 'next/link'
import { useTheme } from '@mui/material/styles'

const collectionStats = [
  {
    title: 'Floor Price',
    amount: '$295,481.62',
    num: '+2.11%',
  },
  {
    title: 'Volume',
    amount: '$295,481.62',
    num: 'total',
  },
  {
    title: 'Latest Price',
    amount: '$295,481.62',
    num: '---',
  },
]

export default function CollectionPage() {
  const theme = useTheme()

  return (
    <>
      <Header />

      <div>
        <Box>
          <Image src={Images.collectionpage} alt="" />
        </Box>
        <Box>
          <Container>
            <Box
              className="flex -translate-y-20 items-center justify-center rounded-2xl border"
              sx={{
                bgcolor: theme.tenosia.background,
                borderColor: 'divider',
              }}
            >
              <Grid container spacing={3}>
                <Grid item md={3}>
                  <Box className="p-5">
                    <Box>
                      <Image src={Images.robot} className="rounded-2xl" alt="" />
                    </Box>
                    <Box className="flex items-center justify-center p-3">
                      <Stack direction="row" spacing={6}>
                        <Link href="/">
                          <a>
                            <FacebookIcon sx={{ color: 'common.white' }} />
                          </a>
                        </Link>
                        <Link href="/">
                          <a>
                            <TwitterIcon sx={{ color: 'common.white' }} />
                          </a>
                        </Link>
                        <Link href="/">
                          <a>
                            <InstagramIcon sx={{ color: 'common.white' }} />
                          </a>
                        </Link>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={9}>
                  <Box className="p-5">
                    <Box>
                      <Box
                        component="h1"
                        sx={{ typography: 'h4', fontWeight: 700, color: 'text.primary', m: 0 }}
                      >
                        Awesome NFTs collection
                      </Box>
                      <Box
                        component="span"
                        sx={{
                          display: 'block',
                          typography: 'body2',
                          color: theme.tenosia.muted,
                          mt: 1,
                        }}
                      >
                        Karafuru is home to 5,555 generative arts where colors
                        reign supreme. Leave the drab reality and enter the
                        world of Karafuru by Museum of Toys.
                      </Box>
                    </Box>
                    <Box className="py-3">
                      <Grid container>
                        {collectionStats.map((item) => (
                          <Grid item md={3} xs={12} className="m-2" key={item.title}>
                            <Box
                              sx={{
                                border: '1px solid',
                                borderColor: theme.tenosia.muted,
                              }}
                              className="rounded-xl"
                            >
                              <Box
                                component="h6"
                                sx={{ py: 4, textAlign: 'center', typography: 'subtitle2', color: 'text.primary', m: 0 }}
                              >
                                {item.title}
                              </Box>
                              <Box
                                component="h6"
                                sx={{ py: 1, textAlign: 'center', typography: 'subtitle2', color: 'text.primary', m: 0 }}
                              >
                                {item.amount}
                              </Box>
                              <Box
                                component="h6"
                                sx={{
                                  pt: 1,
                                  pb: 5,
                                  textAlign: 'center',
                                  typography: 'subtitle2',
                                  color: 'success.main',
                                  m: 0,
                                }}
                              >
                                {item.num}
                              </Box>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  )
}
