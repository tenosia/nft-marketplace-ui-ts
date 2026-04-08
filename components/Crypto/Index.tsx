import { Box, Container, Grid, Stack, Button } from '@mui/material'
import Image from 'next/image'
import Images from '../../public/images/Images'
import { useTheme } from '@mui/material/styles'

export default function Crypto() {
  const theme = useTheme()

  return (
    <Box sx={{ bgcolor: theme.tenosia.background, py: '15vh' }}>
      <Container>
        <Box sx={{ borderRadius: 2, bgcolor: theme.tenosia.surface }}>
          <Grid container className="py-12">
            <Grid item md={6} xs={12}>
              <Box className="flex items-center justify-center py-[8vh]">
                <Container>
                  <Box className="px-3">
                    <Image src={Images.logo} alt="" />
                  </Box>
                  <Box>
                    <Box
                      component="h1"
                      sx={{ p: 3, typography: 'h4', fontWeight: 700, color: 'text.primary', m: 0 }}
                    >
                      Earn Free Crypto With Ciscrypt
                    </Box>
                  </Box>
                  <Box>
                    <Box component="span" sx={{ px: 2, display: 'block', color: theme.tenosia.caption }}>
                      A Creative Agency that lead and inspire.
                    </Box>
                  </Box>

                  <Box className="flex py-3" sx={{ color: 'text.primary' }}>
                    <Stack direction="row" spacing={2}>
                      <Button variant="contained" color="primary" className="rounded-2xl">
                        Create Item
                      </Button>

                      <Button
                        variant="outlined"
                        className="rounded-2xl"
                        sx={{
                          borderColor: 'common.white',
                          color: 'common.white',
                        }}
                      >
                        Discover More
                      </Button>
                    </Stack>
                  </Box>
                </Container>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box className="px-3">
                <Image src={Images.bitcoin} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
