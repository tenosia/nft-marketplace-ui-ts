import { Box, Button, Container, Grid, Stack } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Image from 'next/image'
import Images from '../../public/images/Images'
import { useTheme } from '@mui/material/styles'

export default function Creators() {
  const theme = useTheme()

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

  const card = (item: (typeof Data)[0], index: number) => (
    <Grid item sm={12} xs={12} md={3} key={index} className="p-3">
      <Box
        className="rounded-2xl bg-transparent text-white"
        sx={{
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box className="flex p-3">
          <Stack direction="row">
            <Image src={item.img1} alt="" className="rounded-xl" />
            <Image src={item.img2} alt="" className="rounded-xl" />
            <Image src={item.img3} alt="" className="rounded-xl" />
          </Stack>
        </Box>
        <Box className="flex -translate-y-6 items-center justify-center">
          <Image
            src={item.img}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
        </Box>
        <Box className="flex justify-between">
          <Box className="flex flex-col justify-between px-2 text-xs" sx={{ color: 'text.primary' }}>
            <Box component="span" className="text-xl">
              {item.name}
            </Box>
            <Box component="span" className="text-md">
              @ Creator
            </Box>
          </Box>
          <Box>
            <Button variant="contained" color="primary" className="mx-2 rounded-3xl">
              Follow
            </Button>
          </Box>
        </Box>

        <Box className="py-6">
          <Box
            component="p"
            sx={{
              typography: 'body2',
              color: theme.tenosia.caption,
              px: 2,
              m: 0,
            }}
          >
            {item.description}
          </Box>
        </Box>
      </Box>
    </Grid>
  )

  return (
    <Box sx={{ bgcolor: theme.tenosia.background }}>
      <Container>
        <Box className="block justify-between py-[15vh] md:flex">
          <Box component="h1" sx={{ typography: 'h4', fontWeight: 700, color: 'text.primary', m: 0 }}>
            Popular{' '}
            <Box component="span" sx={{ color: 'success.main' }}>
              Creator
            </Box>
          </Box>
          <Box>
            <Button
              variant="outlined"
              className="my-3 rounded-2xl md:my-0"
              sx={{
                borderWidth: 2,
                borderColor: 'common.white',
                color: 'common.white',
                '&:hover': { borderWidth: 2, borderColor: 'common.white', bgcolor: 'rgba(255,255,255,0.04)' },
              }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              sort order
            </Button>
          </Box>
        </Box>
        <Box className="py-[8vh]">
          <Grid container>{Data.map((item, index) => card(item, index))}</Grid>
        </Box>

        <Box className="flex items-center justify-center py-3" sx={{ color: 'text.primary' }}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              className="rounded-2xl"
              sx={{
                borderColor: 'common.white',
                color: 'common.white',
                '&:hover': { borderColor: 'common.white', bgcolor: 'rgba(255,255,255,0.04)' },
              }}
            >
              Show More
            </Button>
            <Button variant="contained" color="primary" className="rounded-2xl">
              Become an author
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
