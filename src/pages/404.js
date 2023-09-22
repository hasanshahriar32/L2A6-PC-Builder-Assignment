import { Button } from "antd";
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
      <Image
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
        // src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXVuaXNqbDNkeTRrbnpzNWxpdzVrOHl0M3JkcnNsMHJycnJxbGRsNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dHM/y1aX1Pbnd0H95Ka3LB/giphy.gif"
      />
      <Link href={"/"}>
        {/* <Button
          type="primary"
          className="btn btn-ghost"
          style={{ position: "absolute", top: "50vh", right: "50vw" }}
        >
          Go Home
        </Button> */}
      </Link>
    </div>
  );
};

export default ErrorPage;
