import '@/styles/globals.scss';
import type { AppProps } from 'next/app'
import { PortfolioProvider } from "../../context/context"
import Header from "../components/Header";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {

  return (
      <PortfolioProvider>
          <Head>
              <title>Seonghoon Choi Portfolio</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="wrap">
            <Header />
              <main>
                <Component {...pageProps} />
              </main>
          </div>
      </PortfolioProvider>
  )
}

export default App;