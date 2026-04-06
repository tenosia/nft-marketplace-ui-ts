import { Box, Container, Grid, Stack, Button } from '@mui/material'
import Image from 'next/image'
import Images from '../../public/images/Images'

export default function Crypto() {
  return (
    <>
      <div className="bg-[#111827] py-[15vh]">
        <Container>
          <div className="rounded-2xl bg-[#0E131F]">
            <Grid container className="py-12">
              <Grid item md={6} xs={12}>
                <Box className="flex items-center justify-center py-[8vh]">
                  <Container>
                    <Box className="px-3">
                      <Image src={Images.logo} alt="" />
                    </Box>
                    <Box>
                      <h1 className="p-3 text-4xl font-bold text-white">
                        Earn Free Crypto With Ciscrypt
                      </h1>
                    </Box>
                    <Box>
                      <span className="px-4 text-[#879DAE]">
                        A Creative Agency that lead and inspire.
                      </span>
                    </Box>

                    <Box className="  flex py-3 text-white">
                      <Stack direction="row" spacing={2}>
                        <Button
                          variant="contained"
                          className=" rounded-2xl bg-blue-500 text-white"
                        >
                          Create Item
                        </Button>

                        <Button
                          variant="outlined"
                          className="rounded-2xl border border-white  bg-transparent text-white"
                        >
                          Discover More
                        </Button>
                      </Stack>
                    </Box>
                  </Container>
                </Box>
              </Grid>
              <Grid md={6} xs={12}>
                <Box className="px-3">
                  <Image src={Images.bitcoin} alt="" />
                </Box>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  )
}
