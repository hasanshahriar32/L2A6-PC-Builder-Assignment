import React, { useState } from "react";
import { Layout, Button, Drawer } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import styles from "@/styles/Navbar.module.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  // If you do not want to auto-close the mobile drawer when a path is selected
  // Delete or comment out the code block below
  // From here
  //   let { pathname: location } = useLocation();
  //   useEffect(() => {
  //     setVisible(false);
  //   }, [location]);
  // Upto here

  return (
    <nav className={`${styles.navbar}`}>
      <Layout>
        <Layout.Header className={`${styles.navHeader}`}>
          <div className={`${styles.logo}`}>
            <h3 className={`${styles.brandFont}`}>Brand Here</h3>
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
            <div className={`${styles.rightMenu}`}>
              <RightMenu mode={"horizontal"} />
            </div>

            <Drawer
              title={"Brand Here"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <LeftMenu mode={"inline"} />
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;
