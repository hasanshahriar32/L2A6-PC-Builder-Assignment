import Head from "next/head";
import { Inter } from "next/font/google";
import MainLayout from "@/components/layout";
import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { Avatar, Button, List, Skeleton } from "antd";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

export default function BuildPc({ allCategory }) {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  // const onLoadMore = () => {
  //   setLoading(true);
  //   setList(
  //     data.concat(
  //       [...new Array(count)].map(() => ({
  //         loading: true,
  //         name: {},
  //         picture: {},
  //       })),
  //     ),
  //   );
  //   fetch(fakeDataUrl)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const newData = data.concat(res.results);
  //       setData(newData);
  //       setList(newData);
  //       setLoading(false);
  //       // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
  //       // In real scene, you can using public method of react-virtualized:
  //       // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
  //       window.dispatchEvent(new Event('resize'));
  //     });
  // };
  // const loadMore =
  //   !initLoading && !loading ? (
  //     <div
  //       style={{
  //         textAlign: 'center',
  //         marginTop: 12,
  //         height: 32,
  //         lineHeight: '32px',
  //       }}
  //     >
  //       <Button onClick={onLoadMore}>loading more</Button>
  //     </div>
  //   ) : null;
  console.log(allCategory);
  return (
    <div>
      <br />
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        // loadMore={loadMore}
        style={{margin: "0 5vw"}}
        dataSource={allCategory}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key="list-loadmore-edit">edit</a>,
              <a key="list-loadmore-more">remove</a>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item?.category_image} />}
                title={<a href="https://ant.design">{item?.category_name}</a>}
                description={item?.category_description}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/api/category`);
  const data = await res.json();
  // console.log(data);
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
