import '@/styles/globals.css'
import { StyledEngineProvider } from '@mui/material'
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from '@/theme/theme';

export default function App({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
