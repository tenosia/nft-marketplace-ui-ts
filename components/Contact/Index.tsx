import { Box, Container, Grid } from '@mui/material'
import Chip from '@mui/material/Chip'
import Image from 'next/image'
import Images from '../../public/images/Images'
export default function Contact() {
  return (
    <>
      <div className="bg-[#111827]">
        <Container>
          <Grid container className="py-4">
            <Grid item md={6} xs={12} className="py-4">
              <Box>
                <h1 className="py-3 text-3xl font-bold text-white">
                  Never miss a drop!
                </h1>
              </Box>
              <Box>
                <span className=" text-[#879DAE]">
                  Subcribe to our super-exclusive drop list and be the first to{' '}
                  <br />
                  know abour upcoming drops
                </span>
              </Box>
              <Box className="mt-6">
                <Chip
                  sx={{
                    variant: 'contained',
                  }}
                  label="01"
                  className=" bg-[#DCFCE7]"
                />
                <span className="px-2 text-white">Get More Discount</span>
              </Box>
              <Box className="mt-6">
                <Chip
                  sx={{
                    variant: 'contained',
                  }}
                  label="01"
                  className=" bg-[#DCFCE7]"
                />
                <span className="px-2 text-white">Get Premium Magazine</span>
              </Box>
              <div className="w-full py-3">
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="1px solid silver my-4 rounded-xl border bg-transparent p-1.5 text-white md:my-0"
                />
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box>
                <Image src={Images.book} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  )
}
