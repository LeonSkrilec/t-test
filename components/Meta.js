import React from 'react';
import NextHead from 'next/head';

export default function Head() {
  return (
    <NextHead>
      <title>T-test | Online statistični izračuni</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Online izračuni elementarnih statističnih operacij." />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1F5FA8" />
      <meta name="msapplication-TileColor" content="#1F5FA8"></meta>
      <meta name="theme-color" content="#ffffff"></meta>

      <meta property="og:url" content="https://t-test-si" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="T-test | Online statistični izračuni" />
      <meta
        property="og:description"
        content="Odprtokodna aplikacija za hitre statistične izračune z jasno interpretacijo rezultatov."
      />
      <meta property="og:image" content="https://t-test.si/share.png" />
    </NextHead>
  );
}
