import { Box, Button, Container, Grid, styled } from '@mui/material'

const ImageContainer = styled(Box)(
  ({ theme }) => `
visibility: visible;
position: absolute;
top: 0;
left: 0;
bottom:0;
width: 100%;
height: 100%;
overflow: hidden;
display: block;
pointer-events: none;
transition: display .3s;
`
)

export default function Video() {
  return (
    <>
      <div className="bg-[#111827]">
        <Container>
          <Box className="py-5">
            <h1 className="py-2 text-3xl font-bold text-white">
              🎬 The Videos
            </h1>
            <span className=" text-lg text-[#B5B8BD]">
              Check out our hottest videos. View more and share more new <br />{' '}
              perspectives on just about any topic. Everyone’s welcome.
            </span>
          </Box>

          <Box className="flex items-center justify-end">
            <Box className="-z-3 relative my-4 h-[70vh] w-[40rem] rounded-2xl bg-[#1C2634]"></Box>
            <Box>
              <video src="https://www.youtube.com/watch?time_continue=1&v=RzVvThhjAKw&feature=emb_logo"></video>
            </Box>
          </Box>
        </Container>
      </div>
    </>
  )
}
