import '@/styles/globals.css'

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

import { StyledEngineProvider } from '@mui/material'
import { ThemeProvider, CssBaseline } from "@mui/material";
import Layout from "@/components/layout/Layout";
import theme from '@/theme/theme';

import { store } from "@/store/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";


let persistor = persistStore(store);

const progress = new ProgressBar({
  size: 4,
  color: "#DC143C",
  className: "",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
