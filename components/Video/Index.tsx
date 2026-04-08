import { Box, Container } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const VIDEO_EMBED_ID = 'RzVvThhjAKw'

export default function Video() {
  const theme = useTheme()

  return (
    <Box sx={{ bgcolor: theme.tenosia.background }}>
      <Container>
        <Box className="py-5">
          <Box
            component="h1"
            sx={{ py: 2, typography: 'h4', fontWeight: 700, color: 'text.primary', m: 0 }}
          >
            The Videos
          </Box>
          <Box
            component="span"
            sx={{
              display: 'block',
              typography: 'body1',
              fontSize: '1.125rem',
              color: theme.tenosia.muted,
            }}
          >
            Check out our hottest videos. View more and share more new
            perspectives on just about any topic. Everyone is welcome.
          </Box>
        </Box>

        <Box className="flex flex-col items-end gap-4 lg:flex-row lg:items-center lg:justify-end">
          <Box
            className="-z-[3] relative my-4 hidden h-[70vh] max-w-[40rem] flex-1 rounded-2xl lg:block"
            sx={{ bgcolor: theme.tenosia.panelDeep, minHeight: 200 }}
            aria-hidden
          />
          <Box className="relative z-[1] w-full max-w-[40rem]">
            <Box
              component="iframe"
              title="Featured video"
              src={`https://www.youtube.com/embed/${VIDEO_EMBED_ID}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              sx={{
                display: 'block',
                width: '100%',
                aspectRatio: '16 / 9',
                maxHeight: '70vh',
                border: 0,
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
