import Head from 'next/head';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Button, CardMedia, Grid, Stack } from "@mui/material";
import HeaderComponent from '@/components/header/Header';
import HeroArea from '@/components/homepage/hero-area/HeroArea';
import Layout from '@/components/layout/Layout';
import Trending from "@/components/homepage/trending/Trending";
import { Discount } from '@/components/homepage/discount/Discount';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <HeroArea />
          <Trending />
          <Discount />
      </Layout>
    </>
  );
}
