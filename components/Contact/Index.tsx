import { Box, Container, Grid, Chip } from '@mui/material'
import Image from 'next/image'
import Images from '../../public/images/Images'
import { useTheme } from '@mui/material/styles'

export default function Contact() {
  const theme = useTheme()

  return (
    <Box sx={{ bgcolor: theme.tenosia.background }}>
      <Container>
        <Grid container className="py-4">
          <Grid item md={6} xs={12} className="py-4">
            <Box>
              <Box
                component="h1"
                sx={{ py: 3, typography: 'h4', fontWeight: 700, color: 'text.primary', m: 0 }}
              >
                Never miss a drop!
              </Box>
            </Box>
            <Box>
              <Box component="span" sx={{ color: theme.tenosia.caption }}>
                Subscribe to our super-exclusive drop list and be the first to
                know about upcoming drops
              </Box>
            </Box>
            <Box className="mt-6">
              <Chip
                label="01"
                sx={{ bgcolor: '#DCFCE7', color: '#166534', fontWeight: 600 }}
              />
              <Box component="span" sx={{ px: 2, color: 'text.primary' }}>
                Get More Discount
              </Box>
            </Box>
            <Box className="mt-6">
              <Chip
                label="01"
                sx={{ bgcolor: '#DCFCE7', color: '#166534', fontWeight: 600 }}
              />
              <Box component="span" sx={{ px: 2, color: 'text.primary' }}>
                Get Premium Magazine
              </Box>
            </Box>
            <Box className="w-full py-3">
              <Box
                component="input"
                type="text"
                placeholder="Enter Your Email"
                sx={{
                  my: { xs: 2, md: 0 },
                  width: 1,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  px: 1.5,
                  py: 0.75,
                  outline: 'none',
                  '&::placeholder': { color: 'text.secondary' },
                }}
              />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <Image src={Images.book} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
