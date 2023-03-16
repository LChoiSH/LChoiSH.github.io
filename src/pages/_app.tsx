import React, { useEffect, useRef, useState } from 'react';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app'
import { PortfolioProvider } from "../../context/context"
import Header from "../components/Header";
import Head from "next/head";
import throttle from 'lodash/throttle';

function App({ Component, pageProps }: AppProps) {

    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

    const handleScroll = throttle(() => {
        // 1. 이전 scroll 값과 동일한 값이 들어온 경우 무시 (hash link로 이동 시 불필요한 스크롤 이벤트 발생하는 경우 존재)
        // 2. iOS의 elastic scroll 때문에 scrollY 값이 음수가 되거나 전체 높이보다 높게 넘어가는 경우가 있으므로
        //    그 사이 값일 때만 scroll event를 적용하도록 제한
        if (
            window.scrollY !== lastScrollY.current &&
            window.scrollY >= 0 &&
            window.scrollY + window.innerHeight <= document.body.scrollHeight
        ) {
            setIsHeaderHidden(lastScrollY.current < window.scrollY);
            lastScrollY.current = window.scrollY;
        }
    }, 300);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll); // unmount시 event 해제
    }, [handleScroll]);

    return (
      <PortfolioProvider>
          <Head>
              <title>Seonghoon Choi Portfolio</title>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="wrap">
            <Header isHeaderHidden={isHeaderHidden} />
              <main>
                <Component {...pageProps} />
              </main>
          </div>
      </PortfolioProvider>
    )
}

export default App;