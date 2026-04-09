import { Box, Button, Container, Grid, Stack } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import Image from 'next/image'
import Images from '../../public/images/Images'
import { useTheme } from '@mui/material/styles'
import { useMemo, useState } from 'react'

type Creator = {
  id: string
  bannerImages: [typeof Images.c1, typeof Images.c2, typeof Images.c3]
  avatar: typeof Images.profile
  name: string
  handle: string
  description: string
}

const creatorsData: Creator[] = [
  {
    id: 'amaris-pitt',
    bannerImages: [Images.c1, Images.c2, Images.c3],
    avatar: Images.profile,
    name: 'Amaris Pitt',
    handle: '@amarispitt',
    description:
      'X-Metaverse is a Star Wars game based on NFT + blockchain exploration, mining and trading.',
  },
  {
    id: 'dan-jackson',
    bannerImages: [Images.c1, Images.c2, Images.c3],
    avatar: Images.profile,
    name: 'Dan Jackson',
    handle: '@danjackson',
    description:
      'Creating collectible sci-fi artworks for web3 communities with utility-focused holder perks.',
  },
  {
    id: 'sophia-lee',
    bannerImages: [Images.c1, Images.c2, Images.c3],
    avatar: Images.profile,
    name: 'Sophia Lee',
    handle: '@sophialee',
    description:
      'Building animated NFT collections inspired by cyberpunk architecture and futuristic cities.',
  },
  {
    id: 'nathan-yu',
    bannerImages: [Images.c1, Images.c2, Images.c3],
    avatar: Images.profile,
    name: 'Nathan Yu',
    handle: '@nathanyu',
    description:
      'A mixed-media creator focused on rare mints, collaborations, and gamified ownership models.',
  },
]

export default function Creators() {
  const theme = useTheme()
  const [isAscendingSort, setIsAscendingSort] = useState(true)

  const sortedCreators = useMemo(() => {
    return [...creatorsData].sort((a, b) =>
      isAscendingSort ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name),
    )
  }, [isAscendingSort])

  const card = (item: Creator) => (
    <Grid item sm={12} xs={12} md={6} lg={3} key={item.id} className="p-3">
      <Box
        className="rounded-2xl bg-transparent text-white"
        sx={{
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box className="flex p-3">
          <Stack direction="row" spacing={0.75}>
            {item.bannerImages.map((bannerImage, index) => (
              <Image
                key={`${item.id}-banner-${index}`}
                src={bannerImage}
                alt={`${item.name} collection preview ${index + 1}`}
                className="rounded-xl"
              />
            ))}
          </Stack>
        </Box>
        <Box className="flex -translate-y-6 items-center justify-center">
          <Image
            src={item.avatar}
            alt={`${item.name} avatar`}
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
              {item.handle}
            </Box>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              className="mx-2 rounded-3xl"
              aria-label={`Follow ${item.name}`}
            >
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
              onClick={() => setIsAscendingSort((previous) => !previous)}
              sx={{
                borderWidth: 2,
                borderColor: 'common.white',
                color: 'common.white',
                '&:hover': { borderWidth: 2, borderColor: 'common.white', bgcolor: 'rgba(255,255,255,0.04)' },
              }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              sort: {isAscendingSort ? 'A-Z' : 'Z-A'}
            </Button>
          </Box>
        </Box>
        <Box className="py-[8vh]">
          <Grid container>{sortedCreators.map((item) => card(item))}</Grid>
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
