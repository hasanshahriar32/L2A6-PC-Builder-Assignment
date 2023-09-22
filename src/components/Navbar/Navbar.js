import React, { useState, useEffect } from "react";
import { Layout, Button, Drawer, ConfigProvider } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import styles from "@/styles/Navbar.module.css";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  // If you do not want to auto-close the mobile drawer when a path is selected
  // Delete or comment out the code block below
  // From here
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Do something when the route changes, e.g., setVisible(false)
      setVisible(false);
    };

    // Subscribe to the router's route change events
    router.events.on("routeChangeComplete", handleRouteChange);

    // Clean up the event listener when the component unmounts
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  // Upto here

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            /* here is your component tokens */
            headerBg: "#f5f5f5",
          },
        },
      }}
    >
      ...
      <nav className={`${styles.navbar}`}>
        <Layout>
          <Layout.Header className={`${styles.navHeader}`}>
            <div className={`${styles.logo}`}>
              <Link href="/">
                <h3 className={`${styles.brandFont}`}>ParadoxTech</h3>
              </Link>
            </div>
            <div className={`${styles.navbarMenu}`}>
              <div className={`${styles.leftMenu}`}>
                <LeftMenu mode={"horizontal"} />
              </div>
              <Button
                className={`${styles.menuButton}`}
                type="text"
                onClick={showDrawer}
              >
                <MenuOutlined />
              </Button>
              <SessionProvider>
                <div className={`${styles.rightMenu}`}>
                  <RightMenu mode={"horizontal"} />
                </div>
              </SessionProvider>

              <Drawer
                title={"ParadoxTech"}
                placement="right"
                closable={true}
                onClose={showDrawer}
                visible={visible}
                style={{ zIndex: 99999 }}
              >
                <LeftMenu mode={"inline"} />
                <SessionProvider>
                  <RightMenu mode={"inline"} />
                </SessionProvider>
              </Drawer>
            </div>
          </Layout.Header>
        </Layout>
      </nav>
    </ConfigProvider>
  );
};

export default Navbar;
