import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { PortfolioProvider } from "../../context/context"
import { prefix } from "../../config/config"

function App({ Component, pageProps }: AppProps) {

  return (
      <PortfolioProvider value={{ prefix }}>
        <Component {...pageProps} />
      </PortfolioProvider>
  )
}

export default App;