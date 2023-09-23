// import Navbar from "@/components/Navbar/Navbar";
// import { Layout } from "antd";
// import FooterBar from "./Footer/Footer";
// import useSWR from "swr";
// export default function MainLayout({ children }) {
//   const fetcher = (...args) => fetch(...args).then((res) => res.json());
//   const { data, error, isLoading } = useSWR("/api/category", fetcher);
//   console.log(data);

//   if (error) return <div>failed to load</div>;
//   if (isLoading) return <div>loading...</div>;
//   return (
//     <Layout
//       style={{
//         minHeight: "100vh",
//         display: "flex",
//         justifyContent: "space-between",
//       }}
//     >
//       <div style={{}}>
//         <Navbar />
//         <main className="" style={{ width: "100%", marginTop: "50px" }}>
//           {children}
//         </main>
//       </div>
//       <FooterBar />
//     </Layout>
//   );
// }
import Navbar from "@/components/Navbar/Navbar";
import { Layout } from "antd";
import FooterBar from "./Footer/Footer";
import useSWR from "swr";

export default function MainLayout({ children }) {
  // Ensure this code only runs on the client-side to avoid server-side issues
  const { data, error, isLoading } = useSWR("/api/category", fetcher);
  if (error) console.log(error);
  // console.log(data);

  // ...

  return (
    <Layout
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Navbar allCategory={data} isLoading={isLoading} />
        <main className="" style={{ width: "100%", marginTop: "50px" }}>
          {children}
        </main>
      </div>
      <FooterBar />
    </Layout>
  );
}

// Define your fetcher function
const fetcher = async (...args) => {
  const res = await fetch(...args);
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};
