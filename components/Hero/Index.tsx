import { Box, Button, Container, Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'
import Images from '../../public/images/Images'
import Chip from '@mui/material/Chip'
export default function Hero() {
  return (
    <>
      <Box sx={{ backgroundColor: '#111827' }}>
        <Container>
          <Box>
            <Grid container>
              <Grid item md={6} xs={12} py={10}>
                <h1 className="text-[4rem] font-bold text-white">
                  Discover, collect,
                  <br />
                  and sell NFTs 🖼
                </h1>
                <span className=" text-xl text-[#879DAE]">
                  Discover the most outstanding NTFs in all topics of life.
                  Creative your NFTs and sell them
                </span>

                <Box className="my-12 w-[14rem] rounded-3xl bg-blue-500 ">
                  <Button className="px-4  text-white">
                    <span className="py-1.5">
                      Start your search <SearchIcon />{' '}
                    </span>
                  </Button>
                </Box>
              </Grid>
              <Grid item md={6} xs={12}>
                <Box className="py-12">
                  <Image src={Images.heroimg} alt="heroimg" />
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Box className=" hidden py-12 lg:block ">
            <Box
              sx={{
                backgroundImage: `url(/images/line.svg)`,
                backgroundSize: 'cover',
              }}
              className="flex items-center justify-between "
            >
              <Grid container>
                <Grid item md={3}>
                  <Box className="flex items-center justify-center">
                    <Image src={Images.h1} />
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className="flex items-center justify-center">
                    <Image src={Images.h2} />
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className="flex items-center justify-center">
                    <Image src={Images.h3} />
                  </Box>
                </Grid>
                <Grid item md={3}>
                  <Box className="flex items-center justify-center">
                    <Image src={Images.h4} />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <Box className="py-12">
            <Grid container columnSpacing={3}>
              <Grid item md={3}>
                <Box className="flex flex-col items-center justify-center">
                  <Box>
                    <Chip
                      sx={{
                        variant: 'contained',
                      }}
                      label="Step 1"
                      className="bg-[#DBEAFE]"
                    />
                  </Box>
                  <Box className="py-3">
                    <h1 className="text-xl font-semibold text-white">
                      Filter & Discover
                    </h1>
                  </Box>
                  <Box className="mb-12 lg:pb-0">
                    <span className="text-center text-lg text-[#879DAE]">
                      Connect with wallet, discover, buy NTFs, sell your NFTs
                      and earn money
                    </span>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={3}>
                <Box className="flex flex-col items-center justify-center">
                  <Box>
                    <Chip
                      sx={{
                        variant: 'contained',
                      }}
                      label="Step 2"
                      className="bg-[#FCE7F3]"
                    />
                  </Box>
                  <Box className="py-3">
                    <h1 className="text-xl font-semibold text-white">
                      Connect Wallet
                    </h1>
                  </Box>
                  <Box className="mb-12 lg:pb-0">
                    <span className="text-center text-lg text-[#879DAE]">
                      Connect with wallet, discover, buy NTFs, sell your NFTs
                      and earn money
                    </span>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className="flex flex-col items-center justify-center">
                  <Box>
                    <Chip
                      sx={{
                        variant: 'contained',
                      }}
                      label="Step 3"
                      className="bg-[#FEF9C3]"
                    />
                  </Box>
                  <Box className="py-3">
                    <h1 className="text-xl font-semibold text-white">
                      Start Trading
                    </h1>
                  </Box>
                  <Box className="mb-12 lg:pb-0">
                    <span className="text-center text-lg text-[#879DAE]">
                      Connect with wallet, discover, buy NTFs, sell your NFTs
                      and earn money
                    </span>
                  </Box>
                </Box>
              </Grid>

              <Grid item md={3}>
                <Box className="flex flex-col items-center justify-center">
                  <Box>
                    <Chip
                      sx={{
                        variant: 'contained',
                      }}
                      label="Step 4"
                      className="bg-[#DCFCE7]"
                    />
                  </Box>
                  <Box className="py-3">
                    <h1 className="text-xl font-semibold text-white">
                      Earn Money
                    </h1>
                  </Box>
                  <Box className="mb-12 lg:pb-0">
                    <span className="text-center text-lg text-[#879DAE]">
                      Connect with wallet, discover, buy NTFs, sell your NFTs
                      and earn money
                    </span>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  )
}
