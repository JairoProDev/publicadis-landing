import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {NextUIProvider, ThemeProvider} from '@nextui-org/react';
import {ThemeProvider as NextThemesProvider} from 'next-themes';

const lightTheme = {
   type: 'light',
   palette: {
      // tus colores personalizados aquí
   },
};

const darkTheme = {
   type: 'dark',
   palette: {
      // tus colores personalizados aquí
   },
};

function MyApp({Component, pageProps}: AppProps) {
   return (
      <NextThemesProvider
         defaultTheme="system"
         attribute="class"
         value={{
            light: 'light',
            dark: 'dark',
         }}
      >
         <NextUIProvider theme={lightTheme}>
            <Component {...pageProps} />
         </NextUIProvider>
      </NextThemesProvider>
   );
}

export default MyApp;