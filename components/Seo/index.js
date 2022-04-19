import React from "react";
import Head from "next/head";

export default function Seo() {
  return (
    <Head>
      <title>Keyboard Hero| App</title>
      <meta property="og:image" content="https://keyboard-hero.vercel.app/website-image.jpeg"/>
      <meta property="og:image:width" content="720"/>
      <meta property="og:image:height" content="900"/>
    </Head>
  );
};