import { Box, Button, Container, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import Images from '../../public/images/Images'
import TextField from '@mui/material/TextField'
export default function () {
  return (
    <>
      <div className="bg-[#0E131F]">
        <Container>
          <Grid container>
            <Grid item md={4} xs={12}>
              <Box className=" relative z-50 my-[20vh] translate-x-0 rounded-xl bg-[#111827] lg:translate-x-20 ">
                <div>
                  <h1 className="text-start p-8 text-2xl font-bold text-white">
                    Beautiful NFT
                  </h1>
                </div>
                <div className="flex justify-between">
                  <Box className="flex  px-8 py-4">
                    <Image
                      src={Images.profile}
                      alt=""
                      width="40"
                      height="40"
                      className="rounded-full "
                    />
                    <Box className="flex flex-col px-2 text-xs text-white">
                      <span>Creator</span>
                      <span>Jane Cooper</span>
                    </Box>
                  </Box>
                  <Box className="flex flex-shrink-0 px-8 py-4">
                    <Image
                      src={Images.collection}
                      alt=""
                      width="40"
                      height="40"
                      className="rounded-full "
                    />
                    <Box className="flex flex-col px-2 text-xs text-white">
                      <span>Collection</span>
                      <span>Marscape</span>
                    </Box>
                  </Box>
                </div>
                <Box className="px-8 py-4 font-bold text-white">
                  <TextField
                    className="w-full text-white"
                    label="Current Bid"
                    sx={{ color: '#fff' }}
                    focused
                    placeholder="$1000"
                  />
                </Box>
                <Box className="flex items-center justify-center py-3">
                  <Box border="0.1px solid silver" className="w-[90%]"></Box>
                </Box>
                <Box className="p-8 ">
                  <Stack direction="row" spacing={1} className="block sm:flex">
                    <Button
                      variant="contained"
                      className="my-4 w-full rounded-3xl bg-[#0284C7] font-semibold md:my-0"
                    >
                      Place a Bid
                    </Button>
                    <Button
                      variant="contained"
                      className=" w-full rounded-3xl bg-[#0284C7]  "
                    >
                      View Items
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Grid>
            <Grid item md={8} xs={12}>
              <Box className="-z-40 my-6 rounded-3xl border-[1rem] border-[#1F2937]">
                <Image src={Images.bub} alt="" className="rounded-2xl" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}
