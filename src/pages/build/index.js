import Head from "next/head";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layout";
import { Layout } from "antd";

export default function BuildPc(){
    return(
        <div>
            <br />
            <h1>Checkout Page Coming Soon</h1>
        </div>
    )
}


BuildPc.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Head>
        <title>Checkout Your Product</title>
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
