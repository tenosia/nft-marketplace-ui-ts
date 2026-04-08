import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    tenosia: {
      background: string
      surface: string
      panel: string
      panelDeep: string
      muted: string
      caption: string
      accentBlue: string
      accentCyan: string
      accentTeal: string
      accentGreen: string
      highlight: string
      infoBlue: string
      legacyPurple: string
    }
    layout: {
      contentWidth: number
    }
  }
  interface ThemeOptions {
    tenosia?: Theme['tenosia']
    layout?: Theme['layout']
  }
}
