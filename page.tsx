'use client'
import React from 'react';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Header from '../../components/header';
import Toast from '../../components/Toast';
import Navbar from '../../components/Nav';

export default function Home() {

  return (
    <div className='root'>
      <Toast />
      <Navbar />
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <Footer />
    </div>
  )
}
