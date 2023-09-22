import Navbar from "@/components/Navbar/Navbar";
import { Layout } from "antd";
import FooterBar from "./Footer/Footer";
export default function MainLayout({ children }) {
  return (
    <Layout
      style={{
        minHeight: "100vh",
        display:"flex",
        justifyContent:"space-between"
      }}

    >
      <div  style={{
        
      }}>
      <Navbar />
      <main className="" style={{ width: "100%", marginTop:"50px" }}>
        {children}
      </main>
      </div>
      <FooterBar />
    </Layout>
  );
}
