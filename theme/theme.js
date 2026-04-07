import { createTheme } from '@mui/material/styles'
import { responsiveFontSizes } from '@mui/material'

const tenosia = {
  background: '#111827',
  surface: '#0E131F',
  panel: '#1F2937',
  panelDeep: '#1C2634',
  muted: '#B5B8BD',
  caption: '#879DAE',
  accentBlue: '#3B82F6',
  accentCyan: '#0284C7',
  accentTeal: '#09ADA9',
  accentGreen: '#22C55E',
  highlight: '#FFBB54',
  infoBlue: '#3298DC',
  legacyPurple: '#374C98',
}

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: tenosia.accentBlue,
        light: '#60A5FA',
        dark: '#2563EB',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: tenosia.accentTeal,
        light: '#43CCC9',
        dark: '#0DB5B1',
        contrastText: '#FFFFFF',
      },
      success: {
        main: tenosia.accentGreen,
        contrastText: '#FFFFFF',
      },
      warning: {
        main: tenosia.highlight,
        contrastText: '#1F2937',
      },
      info: {
        main: tenosia.infoBlue,
        contrastText: '#FFFFFF',
      },
      error: {
        main: '#F87171',
        contrastText: '#FFFFFF',
      },
      text: {
        primary: '#FFFFFF',
        secondary: tenosia.muted,
        disabled: 'rgba(181, 184, 189, 0.5)',
      },
      background: {
        default: tenosia.background,
        paper: tenosia.panel,
      },
      divider: 'rgba(181, 184, 189, 0.24)',
      action: {
        active: '#FFFFFF',
        hover: 'rgba(255, 255, 255, 0.08)',
        selected: 'rgba(255, 255, 255, 0.12)',
        disabled: 'rgba(255, 255, 255, 0.3)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
      },
      common: {
        black: '#000000',
        white: '#FFFFFF',
      },
    },
    tenosia,
    layout: {
      contentWidth: 1236,
    },
    typography: {
      fontFamily: [
        'Poppins',
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ].join(','),
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontWeight: 700,
        lineHeight: 1.2,
      },
      h2: {
        fontWeight: 700,
        lineHeight: 1.25,
      },
      h3: {
        fontWeight: 600,
        lineHeight: 1.3,
      },
      h4: {
        fontWeight: 600,
        lineHeight: 1.35,
      },
      h5: {
        fontWeight: 600,
        lineHeight: 1.4,
      },
      h6: {
        fontWeight: 600,
        lineHeight: 1.45,
      },
      body1: {
        lineHeight: 1.5,
      },
      body2: {
        lineHeight: 1.5,
        color: tenosia.caption,
      },
      button: {
        fontWeight: 600,
        textTransform: 'none',
      },
    },
    shape: {
      borderRadius: 12,
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 12,
            fontWeight: 600,
          },
          containedPrimary: {
            backgroundColor: tenosia.accentBlue,
            '&:hover': {
              backgroundColor: '#2563EB',
            },
          },
          outlined: {
            borderWidth: 2,
            '&:hover': {
              borderWidth: 2,
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 12,
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '& fieldset': {
              borderColor: 'rgba(181, 184, 189, 0.35)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(181, 184, 189, 0.55)',
            },
            '&.Mui-focused fieldset': {
              borderColor: tenosia.accentCyan,
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontWeight: 600,
            fontSize: '14px',
            color: tenosia.muted,
            '&.Mui-focused': {
              color: tenosia.accentCyan,
            },
          },
        },
      },
      MuiListItemButton: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            minWidth: 33,
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
    },
  }),
)

export default theme
