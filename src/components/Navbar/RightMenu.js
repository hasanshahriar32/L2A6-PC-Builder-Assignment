import { Menu, Avatar } from "antd";
import {
  UserOutlined,
  CodeOutlined,
  LogoutOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
const RightMenu = ({ mode }) => {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <Menu mode={mode}>
      {!session ? (
        <Menu.Item onClick={() => signIn("google")} key="login">
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
