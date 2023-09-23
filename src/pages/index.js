import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import MainLayout from "@/components/layout";
import { Layout } from "antd";
import FeaturedCategory from "@/components/Featured/FeaturedCategory";
import FeaturedProducts from "@/components/Featured/FeaturedProducts";
const inter = Inter({ subsets: ["latin"] });

export default function Page({ allCategory }) {
  return (
    <>
      <div>this is home</div>
      <FeaturedCategory allCategory={allCategory} />
      <FeaturedProducts />
      <div
        className="p-item"
        style={{
          fontFamily: "Trebuchet MS,sans-serif",
          lineHeight: "1.15",
          webkitTextSizeAdjust: "100%",
          webkitTapHighlightColor: "transparent",
          fontSize: "14px",
          boxSizing: "border-box",
          margin: "0",
          padding: "0 5px 10px",
          marginBottom: "0",
          display: "flex",
          position: "relative",
          flex: "0 0 25%",
          maxWidth: "25%",
        }}
      >
        <div className="p-item-inner">
          <div className="marks">
            <span
              className="mark"
              style={{
                position: "absolute",
                top: "15px",
                left: 0,
                zIndex: 10,
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              Save: 250৳
            </span>{" "}
          </div>
          <div className="p-item-img">
            {" "}
            <a href="https://www.startech.com.bd/dahua-imou-ranger-2-ip-camera-with-360-degree-coverage">
              <img
                src="https://www.startech.com.bd/image/cache/catalog/security-camera/dahua/ip-camera/imou-ranger-2/imou-ranger-2-200x200.jpg"
                alt="Dahua imou Ranger 2 IP Camera with 360 Degree Coverage (IPC-A22EP/IPC-A22EP-G)"
                width="228"
                height="228"
              />
            </a>
          </div>
          <div className="p-item-details">
            <h4 className="p-item-name">
              {" "}
              <a href="https://www.startech.com.bd/dahua-imou-ranger-2-ip-camera-with-360-degree-coverage">
                Dahua imou Ranger 2 IP Camera with 360 Degree Coverage
                (IPC-A22EP/IPC-A22EP-G)
              </a>
            </h4>
            <div className="p-item-price">
              <span className="price-new">2,450৳</span>{" "}
              <span className="price-old">2,700৳</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/category`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allCategory: data.data,
    },
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
