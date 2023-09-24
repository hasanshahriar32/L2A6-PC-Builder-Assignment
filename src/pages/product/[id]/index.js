import Head from "next/head";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layout";
import { Layout } from "antd";
import FeaturedCategory from "@/components/Featured/FeaturedCategory";
import FeaturedProducts from "@/components/Featured/FeaturedProducts";
import HeroBanner from "@/components/Hero/Hero";

export default function Page({ featured }) {
  console.log(featured);
  return (
    <>
        <br />
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Category of {featured?.product_name}
      </h1>
      <p style={{ textAlign: "center", margin: "0 3px", marginTop: "-6px" }}>
        Some of our personalized products you might like exploring!
      </p>
      {/* <FeaturedProducts featured={featured?.products} /> */}
    </>
  );
}
export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/products/all`);
  const newses = await res.json();
  const paths = newses?.data?.map((news) => ({
    params: { id: news.product_id.toString() },
  }));
  return { paths, fallback: true };
};
export const getStaticProps = async (context) => {
  try {
    const { params } = context;
    const res = await fetch(
      `${process.env.SERVER_URL}/api/products/single?product_id=${parseInt(
        params.id
      )}`
    );
    const data = await res.json();

    if (!data || !data.data || data.data.length === 0) {
      // If data is not available or empty, return an empty object
      return {
        props: { featured: {} },
      };
    }

    // Ensure that the 'featured' prop is always an object, even if the data is available
    return {
      props: { featured: data.data[0] || {} },
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      props: { featured: {} },
    };
  }
};

// export const getStaticProps = async (context) => {
//   const { params } = context;
//   const res = await fetch(
//     `${process.env.SERVER_URL}/api/products/single?product_name=${params.id}`
//   );
//   const data = await res.json();

//   return {
//     props: { featured: data?.data },
//   };
// };

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Head>
        <title>Category List</title>
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
