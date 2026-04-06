import { Box, Button, Container, Grid, Stack } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Image from 'next/image'
import Images from '../../public/images/Images'
import Avatar from '@mui/material/Avatar'
export default function Creators() {
  const Data = [
    {
      img1: Images.c1,
      img2: Images.c2,
      img3: Images.c3,
      img: Images.profile,
      name: 'Amaris Pitt',
      description:
        'X-Metaverse is a Star Wars game based on NFT+ blockchain exploration, mining, trading ...',
    },
    {
      img1: Images.c1,
      img2: Images.c2,
      img3: Images.c3,
      img: Images.profile,
      name: 'Amaris Pitt',
      description:
        'X-Metaverse is a Star Wars game based on NFT+ blockchain exploration, mining, trading ...',
    },
    {
      img1: Images.c1,
      img2: Images.c2,
      img3: Images.c3,
      img: Images.profile,
      name: 'Amaris Pitt',
      description:
        'X-Metaverse is a Star Wars game based on NFT+ blockchain exploration, mining, trading ...',
    },
    {
      img1: Images.c1,
      img2: Images.c2,
      img3: Images.c3,
      img: Images.profile,
      name: 'Amaris Pitt',
      description:
        'X-Metaverse is a Star Wars game based on NFT+ blockchain exploration, mining, trading ...',
    },
  ]
  return (
    <>
      <div className="bg-[#111827]">
        <Container>
          <Box className=" block justify-between py-[15vh] md:flex">
            <h1 className=" text-4xl font-bold text-white">
              Popular <span className="text-green-500">Creator</span>
            </h1>
            <Box>
              <Button
                variant="outlined"
                className="my-3 rounded-2xl border-2 border-white bg-transparent text-white md:my-0"
              >
                sort order <KeyboardArrowDownIcon />
              </Button>
            </Box>
          </Box>
          <Box className="py-[8vh]">
            <Box>
              <Grid container>
                {Data.map((item, index) => (
                  <Grid item sm={12} xs={12} md={3} className="p-3">
                    <Box
                      className=" rounded-2xl bg-transparent text-white"
                      sx={{ border: '1px solid silver' }}
                    >
                      <Box className="flex p-3 ">
                        <Stack direction="row">
                          <Image
                            src={Images.c1}
                            alt=""
                            className="rounded-xl"
                          />
                          <Image
                            src={Images.c2}
                            alt=""
                            className="rounded-xl"
                          />
                          <Image
                            src={Images.c3}
                            alt=""
                            className="rounded-xl"
                          />
                        </Stack>
                      </Box>
                      <Box className="flex -translate-y-6 items-center justify-center">
                        <Image
                          src={Images.profile}
                          alt=""
                          width="40"
                          height="40"
                          className="rounded-full "
                        />
                      </Box>
                      <Box className="flex justify-between">
                        <Box className="flex flex-col justify-between px-2 text-xs text-white">
                          <span className="text-xl">Amaris Pitt</span>
                          <span className="text-md">@ Creaator</span>
                        </Box>
                        <Box>
                          <Button
                            variant="contained"
                            className="mx-2 rounded-3xl bg-blue-500"
                          >
                            Follow
                          </Button>
                        </Box>
                      </Box>

                      <Box className="py-6">
                        <h1 className="text-md px-2  text-[#879DAE]">
                          X-Metaverse is a Star Wars game based on NFT+
                          blockchain exploration, mining, trading ...
                        </h1>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box>
              <Grid container>
                {Data.map((item, index) => (
                  <Grid item sm={12} xs={12} md={3} className="p-3">
                    <Box
                      className=" rounded-2xl bg-transparent text-white"
                      sx={{ border: '1px solid silver' }}
                    >
                      <Box className="flex p-3 ">
                        <Stack direction="row">
                          <Image src={Images.c1} className="rounded-xl" />
                          <Image src={Images.c2} className="rounded-xl" />
                          <Image src={Images.c3} className="rounded-xl" />
                        </Stack>
                      </Box>
                      <Box className="flex -translate-y-6 items-center justify-center">
                        <Image
                          src={Images.profile}
                          width="40"
                          height="40"
                          className="rounded-full "
                        />
                      </Box>
                      <Box className="flex justify-between">
                        <Box className="flex flex-col justify-between px-2 text-xs text-white">
                          <span className="text-xl">Amaris Pitt</span>
                          <span className="text-md">@ Creaator</span>
                        </Box>
                        <Box>
                          <Button
                            variant="contained"
                            className="mx-2 rounded-3xl bg-blue-500"
                          >
                            Follow
                          </Button>
                        </Box>
                      </Box>

                      <Box className="py-6">
                        <h1 className="text-md px-2  text-[#879DAE]">
                          X-Metaverse is a Star Wars game based on NFT+
                          blockchain exploration, mining, trading ...
                        </h1>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>

          <Box className="  flex items-center justify-center py-3 text-white">
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                className="rounded-2xl border border-white  bg-transparent text-white"
              >
                Show More
              </Button>
              <Button
                variant="contained"
                className=" rounded-2xl bg-blue-500 text-white"
              >
                Become a author
              </Button>
            </Stack>
          </Box>
        </Container>
      </div>
    </>
  )
}
