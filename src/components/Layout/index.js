import {useLayoutEffect, useState} from 'react';
import Head from 'next/head';
import {isBrowser} from '../../utils';
import Header from '../Header';
import Footer from '../Footer';

import {layout} from '../../styles/components/Layout.module.scss';

const Layout = ({children}) => {
  const [, setSize] = useState([0, 0]);
  const updateSize = () => isBrowser() && setSize([window.innerWidth, window.innerHeight]);

  useLayoutEffect(() => {
    isBrowser() && window.addEventListener('resize', updateSize);
    updateSize();
    return () => isBrowser() && window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <>
      <Head>
        <title>Stake Service</title>
        <meta name="description" content="Stake Service validator"/>
        <link rel="icon" href="/assets/favicon/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/assets/favicon/site.webmanifest"/>
        <link rel="mask-icon" href="/assets/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="apple-mobile-web-app-title" content="Stake Service"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="application-name" content="Stake Service"/>
        <meta name="msapplication-TileColor" content="#2b5797"/>
        <meta name="theme-color" content="rgba(19, 1, 34, 0.8)"/>
      </Head>
      <Header/>
      <main className={layout}>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;