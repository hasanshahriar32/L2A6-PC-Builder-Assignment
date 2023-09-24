import { Menu, Avatar } from "antd";
import {
  UserOutlined,
  CodeOutlined,
  LogoutOutlined,
  GoogleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import {useState, useEffect} from "react";
const RightMenu = ({ mode, setCartCount, cartCount }) => {
  const { data: session } = useSession();
  // console.log(session);
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || {};
    const totalQuantity = Object.values(cartItems).reduce(
      (total, quantity) => total + quantity,
      0
    );
    setCartCount(totalQuantity);
  }, [setCartCount, cartCount]);

  return (
    <Menu mode={mode}>
      <Menu.Item key="cart">
        Cart <ShoppingCartOutlined />
        <sup>{cartCount || 0}</sup>
      </Menu.Item>
      {!session ? (
        <Menu.Item
          onClick={() =>
            signIn("google", {
              callbackUrl: process.env.NEXTAUTH_URL,
            })
          }
          key="login"
        >
          <GoogleOutlined /> Login
        </Menu.Item>
      ) : (
        <Menu.SubMenu
          title={
            <>
              {session?.user?.image ? (
                <Avatar src={session?.user?.image} />
              ) : (
                <Avatar icon={<UserOutlined />} />
              )}
              <span className={`${styles.username}`}>
                {session?.user?.name}
              </span>
            </>
          }
        >
          <Menu.Item key="project">
            <CodeOutlined /> Projects
          </Menu.Item>
          <Menu.Item key="profile">
            <Link href="/profile">
              {" "}
              <UserOutlined /> Profile
            </Link>
          </Menu.Item>
          <Menu.Item onClick={() => signOut()} key="log-out">
            <LogoutOutlined /> Logout
          </Menu.Item>
        </Menu.SubMenu>
      )}
    </Menu>
  );
};

export default RightMenu;
