import Head from "next/head";
import MainLayout from "@/components/layout";
import { Layout, message } from "antd";
import React, { useEffect, useState } from "react";
import { Avatar, Button, List, Skeleton } from "antd";
import Link from "next/link";

export default function BuildPc({ allCategory }) {
  const [selectedComponents, setSelectedComponents] = useState({});

  const handleComponentSelect = (categoryName, component) => {
    setSelectedComponents((prevSelected) => ({
      ...prevSelected,
      [categoryName]: component,
    }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const category in selectedComponents) {
      totalPrice += parseFloat(selectedComponents[category].product_price);
    }
    return totalPrice.toFixed(2);
  };
  if (typeof window !== "undefined") {
  JSON.parse(localStorage.getItem("build"));
  }
  const handleCompleteBuild = () => {
    // Check if at least 3 items are selected
    if (!JSON.parse(localStorage.getItem("build")).length >= 3) {
      // Show a success toast message
      message.success("Build completed successfully!");
    } else {
      message.error(
        "Please select all components before completing the build."
      );
    }
  };
  const handleReset = () => {
    localStorage.removeItem("build");
  };

  return (
    <div>
      <br />
      <h1 style={{ textAlign: "center" }}>Pc Builder</h1>
      <p style={{ textAlign: "center", margin: "0 3px", marginTop: "-6px" }}>
        Build your dream pc!
      </p>
      <List
        className="demo-loadmore-list"
        itemLayout="horizontal"
        style={{ margin: "0 5vw" }}
        dataSource={allCategory}
        renderItem={(item) => {
          const buildKey = item.category_name;
          let buildItem = null;

          if (typeof window !== "undefined") {
            // Check if we are on the client-side
            const build = JSON.parse(localStorage.getItem("build"));
            if (build) {
              buildItem = build[buildKey] ? JSON.parse(build[buildKey]) : null;
            }
          }

          return (
            <List.Item>
              <Skeleton
                avatar
                title={false}
                loading={item.loading !== undefined ? item.loading : false}
                active
              >
                <List.Item.Meta
                  avatar={<Avatar src={item?.category_image} />}
                  title={<a href="https://ant.design">{item?.category_name}</a>}
                  description={item?.category_description}
                />
                {buildItem ? (
                  <>
                    <div
                      style={{
                        textAlign: "justify",
                        marginRight: "3vw",
                        width: "20vw",
                      }}
                    >
                      <h3>Name: {buildItem.product_name}</h3>
                    </div>
                    <div>
                      <p>Price: {buildItem.product_price}</p>
                      <p>Quantity: 1</p>
                    </div>
                  </>
                ) : (
                  <Link href={`/category/${item?.category_id}`}>
                    <Button
                      onClick={() =>
                        handleComponentSelect(item.category_name, item)
                      }
                    >
                      ADD
                    </Button>
                  </Link>
                )}
              </Skeleton>
            </List.Item>
          );
        }}
      />
      <div style={{ textAlign: "center", margin: "20px" }}>
        <p>Total Price: ${calculateTotalPrice()}</p>
          <Button type="primary" style={{marginRight:"2px"}} onClick={handleCompleteBuild}>
            Complete Build
          </Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/category`);
  const data = await res.json();
  const res2 = await fetch(`${process.env.SERVER_URL}/api/products/featured`);
  const data2 = await res2.json();
  return {
    props: {
      allCategory: data.data,
    },
  };
};

BuildPc.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Head>
        <title>Build Your Product</title>
        <meta
          name="description"
          content="Welcome to our pc building platform. Here you can organize and purchase your desired pc at an affordable rate."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>{page}</MainLayout>
    </Layout>
  );
};
