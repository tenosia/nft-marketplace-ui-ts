import { Box, Button, Container, Grid, Chip } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Image from 'next/image'
import Images from '../../public/images/Images'
import { useTheme } from '@mui/material/styles'

const steps = [
  {
    chipLabel: 'Step 1',
    title: 'Filter & Discover',
    bg: '#DBEAFE',
    fg: '#1e40af',
  },
  {
    chipLabel: 'Step 2',
    title: 'Connect Wallet',
    bg: '#FCE7F3',
    fg: '#9d174d',
  },
  {
    chipLabel: 'Step 3',
    title: 'Start Trading',
    bg: '#FEF9C3',
    fg: '#854d0e',
  },
  {
    chipLabel: 'Step 4',
    title: 'Earn Money',
    bg: '#DCFCE7',
    fg: '#166534',
  },
] as const

export default function Hero() {
  const theme = useTheme()

  return (
    <Box id="hero" sx={{ bgcolor: theme.tenosia.background }}>
      <Container>
        <Box>
          <Grid container>
            <Grid item md={6} xs={12} py={10}>
              <Box
                component="h1"
                sx={{
                  typography: { xs: 'h3', sm: 'h2', md: 'h1' },
                  fontSize: { md: '4rem' },
                  fontWeight: 700,
                  color: 'text.primary',
                  m: 0,
                }}
              >
                Discover, collect,
                <br />
                and sell NFTs
              </Box>
              <Box
                component="span"
                sx={{
                  display: 'block',
                  mt: 2,
                  typography: 'body1',
                  fontSize: '1.25rem',
                  color: theme.tenosia.caption,
                }}
              >
                Discover the most outstanding NFTs in all topics of life. Create
                your NFTs and sell them
              </Box>

              <Box sx={{ my: 6, maxWidth: '14rem' }}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ borderRadius: 3, py: 1.5 }}
                  startIcon={<SearchIcon />}
                >
                  Start your search
                </Button>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box className="py-12">
                <Image src={Images.heroimg} alt="Featured NFT artwork" />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box className="hidden py-12 lg:block">
          <Box
            sx={{
              backgroundImage: 'url(/images/line.svg)',
              backgroundSize: 'cover',
            }}
            className="flex items-center justify-between"
          >
            <Grid container>
              <Grid item md={3}>
                <Box className="flex items-center justify-center">
                  <Image src={Images.h1} alt="" />
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className="flex items-center justify-center">
                  <Image src={Images.h2} alt="" />
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className="flex items-center justify-center">
                  <Image src={Images.h3} alt="" />
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box className="flex items-center justify-center">
                  <Image src={Images.h4} alt="" />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box className="py-12">
          <Grid container columnSpacing={3}>
            {steps.map((step) => (
              <Grid item md={3} key={step.chipLabel}>
                <Box className="flex flex-col items-center justify-center">
                  <Chip
                    label={step.chipLabel}
                    sx={{
                      bgcolor: step.bg,
                      color: step.fg,
                      fontWeight: 600,
                    }}
                  />
                  <Box className="py-3">
                    <Box
                      component="h2"
                      sx={{
                        typography: 'h6',
                        fontWeight: 600,
                        color: 'text.primary',
                        m: 0,
                      }}
                    >
                      {step.title}
                    </Box>
                  </Box>
                  <Box className="mb-12 lg:pb-0">
                    <Box
                      component="span"
                      sx={{
                        display: 'block',
                        textAlign: 'center',
                        typography: 'body1',
                        fontSize: '1.125rem',
                        color: theme.tenosia.caption,
                      }}
                    >
                      Connect with wallet, discover, buy NFTs, sell your NFTs
                      and earn money
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}
