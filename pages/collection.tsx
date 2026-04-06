import { Box, Container, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import Header from '../components/Header/Index'
import Images from '../public/images/Images'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import Link from 'next/link'
export default function Collection() {
  const Collection = [
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

  return (
    <>
      <Header />

      <div>
        <Box>
          <Image src={Images.collectionpage} />
        </Box>
        <Box>
          <Container>
            <Box className=" flex -translate-y-20 items-center justify-center rounded-2xl border bg-[#111827]">
              <Grid container spacing={3}>
                <Grid item md={3}>
                  <Box className="p-5">
                    <Box>
                      <Image src={Images.robot} className="rounded-2xl" />
                    </Box>
                    <Box className="flex items-center justify-center p-3">
                      <Stack direction="row" spacing={6}>
                        <Link href="/">
                          <a>
                            <FacebookIcon sx={{ color: 'white' }} />
                          </a>
                        </Link>
                        <Link href="/">
                          <a>
                            <TwitterIcon sx={{ color: 'white' }} />
                          </a>
                        </Link>
                        <Link href="/">
                          <a>
                            <InstagramIcon sx={{ color: 'white' }} />
                          </a>
                        </Link>
                      </Stack>
                    </Box>
                  </Box>
                </Grid>
                <Grid item md={9}>
                  <Box className="p-5">
                    <Box>
                      <h1 className="text-4xl font-bold text-white">
                        Awesome NFTs collection
                      </h1>
                      <span className="text-md text-[#B5B8BD]">
                        Karafuru is home to 5,555 generative arts where colors
                        reign supreme. Leave the drab <br /> reality and enter
                        the world of Karafuru by Museum of Toys.
                      </span>
                    </Box>
                    <Box className="py-3">
                      <Grid container>
                        {Collection.map((item, index) => (
                          <Grid item md={3} xs={12} className="m-2">
                            <Box
                              sx={{ border: '0.01px solid #B5B8BD' }}
                              className="rounded-xl"
                            >
                              <h6 className="py-4 text-center text-white">
                                {item.title}
                              </h6>
                              <h6 className="py-1 text-center text-white">
                                {item.amount}
                              </h6>
                              <h6 className="pt-1 pb-5 text-center text-green-500">
                                {item.num}
                              </h6>
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
