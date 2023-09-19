import React, { useEffect } from "react";
import Head from "next/head";
//= Layout
import MainLayout from "@layouts/Main";
//= Components
import Header from "@components/NFTMarketplace/Header";

const Welcome = () => {
  useEffect(() => {
    document.body.classList.add("home-style-12");
    return () => document.body.classList.remove("home-style-12");
  }, []);

  return (
    <>
      <Head>
        <title>Iteck - NFT Marketplace</title>
      </Head>

      <MainLayout>
        <Header />
      </MainLayout>
    </>
  );
};

export default Welcome;
