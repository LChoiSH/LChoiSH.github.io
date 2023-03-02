import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { PortfolioProvider } from "../../context/context"
import { prefix } from "../../config/config"
import Header from "../components/Header";

function App({ Component, pageProps }: AppProps) {

  return (
      <PortfolioProvider value={{ prefix }}>
          <div className="wrap"></div>
        <Header />
        <Component {...pageProps} />
      </PortfolioProvider>
  )
}

export default App;