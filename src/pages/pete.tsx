import React from "react";
import { NextPage } from "next";
import Head from "next/head";

import { AboutPete, PeteIntro, Supply, Utilities } from "views/pete";

const PetePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>$PETE | My Site</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <PeteIntro />
      <AboutPete />
      <Supply />
      <Utilities />
    </div>
  );
};

export default PetePage;