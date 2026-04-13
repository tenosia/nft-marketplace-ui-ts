import { Box, Button, Container, Grid, Stack } from '@mui/material'
import Image from 'next/image'
import Images from '../../public/images/Images'
import TextField from '@mui/material/TextField'
import { useTheme } from '@mui/material/styles'

export default function Bid() {
  const theme = useTheme()

  const ctaSx = {
    bgcolor: theme.tenosia.accentCyan,
    borderRadius: 3,
    fontWeight: 600,
    '&:hover': {
      bgcolor: theme.tenosia.accentCyan,
      filter: 'brightness(1.08)',
    },
  }

  return (
    <Box id="bids" sx={{ bgcolor: theme.tenosia.surface }}>
      <Container>
        <Grid container>
          <Grid item md={4} xs={12}>
            <Box
              className="relative z-50 my-[20vh] translate-x-0 lg:translate-x-20"
              sx={{
                borderRadius: 2,
                bgcolor: theme.tenosia.background,
              }}
            >
              <Box component="h1" sx={{ p: 4, m: 0, typography: 'h4', fontWeight: 700, color: 'text.primary', textAlign: 'start' }}>
                Beautiful NFT
              </Box>
              <Box className="flex justify-between">
                <Box className="flex px-8 py-4">
                  <Image
                    src={Images.profile}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <Box className="flex flex-col px-2 text-xs" sx={{ color: 'text.primary' }}>
                    <span>Creator</span>
                    <span>Jane Cooper</span>
                  </Box>
                </Box>
                <Box className="flex flex-shrink-0 px-8 py-4">
                  <Image
                    src={Images.collection}
                    alt=""
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <Box className="flex flex-col px-2 text-xs" sx={{ color: 'text.primary' }}>
                    <span>Collection</span>
                    <span>Marscape</span>
                  </Box>
                </Box>
              </Box>
              <Box className="px-8 py-4 font-bold" sx={{ color: 'text.primary' }}>
                <TextField
                  fullWidth
                  label="Current Bid"
                  focused
                  placeholder="$1000"
                  InputProps={{ sx: { color: 'text.primary' } }}
                  InputLabelProps={{ sx: { color: 'text.secondary' } }}
                />
              </Box>
              <Box className="flex items-center justify-center py-3">
                <Box
                  className="w-[90%]"
                  sx={{ borderTop: '1px solid', borderColor: 'divider' }}
                />
              </Box>
              <Box className="p-8">
                <Stack direction="row" spacing={1} className="block sm:flex">
                  <Button variant="contained" fullWidth className="my-4 md:my-0" sx={ctaSx}>
                    Place a Bid
                  </Button>
                  <Button variant="contained" fullWidth sx={ctaSx}>
                    View Items
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item md={8} xs={12}>
            <Box
              className="-z-40 my-6 rounded-3xl"
              sx={{
                borderWidth: '1rem',
                borderStyle: 'solid',
                borderColor: theme.tenosia.panel,
              }}
            >
              <Image src={Images.bub} alt="" className="rounded-2xl" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
