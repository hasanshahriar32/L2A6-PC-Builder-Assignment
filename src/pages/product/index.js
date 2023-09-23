import Head from "next/head";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layout";
import { Layout } from "antd";
import FeaturedCategory from "@/components/Featured/FeaturedCategory";
import FeaturedProducts from "@/components/Featured/FeaturedProducts";
import HeroBanner from "@/components/Hero/Hero";

export default function Page({ featured }) {
  // console.log(allCategory, featured);
  return (
    <>
      <br />
      <h1 style={{ textAlign: "center" }}>Featured Prodects</h1>
      <p style={{ textAlign: "center", margin: "0 3px", marginTop: "-6px" }}>
        Some of our personalized products you might like exploring!
      </p>
      <FeaturedProducts featured={featured} />
      
    </>
  );
}

export const getStaticProps = async () => {
  const res2 = await fetch(`${process.env.SERVER_URL}/api/products/featured`);
  const data2 = await res2.json();
  return {
    props: {
      featured: data2.data,
    },
    revalidate: 60,
  };
};

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Head>
        <title>PC Builder Paradox</title>
        <meta
          name="description"
          content="Welcome to our pc building platform. Here you can organize and purchase your desired pc at affordable rate."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>{page}</MainLayout>
    </Layout>
  );
};
