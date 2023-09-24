import { Button, Result } from "antd";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ErrorPage = () => {
  const router = useRouter();
  setTimeout(() => {
    router.push("/");
  }, 2700);
  return (
    <div>
      <Head>
        <title>Not Found</title>
        <meta name="description" content="There is nothing!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Image
        // layout="responsive"
        height={500}
        width={500}
        alt="404"
        style={{
          height: "100vh",
          objectFit: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGswZms0eWprdjh0a2hvemxwdGh4a3dmaGx5NGpweG5nOGV6M2o4NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5xaOcLyjXRo4hX5UhSU/giphy.gif"
      /> */}
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            onClick={() => {
              router.push("/");
            }}
            type="primary"
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default ErrorPage;
