import { Menu } from "antd";
import { useRouter } from "next/router";

const LeftMenu = ({ mode, allCategory, isLoading }) => {
  // console.log(allCategory);
  const router = useRouter();
  return (
    <Menu mode={mode}>
      <Menu.Item key="buildPc"> PC Builder</Menu.Item>
      {/* write a submenu component  */}
      <Menu.SubMenu  key="category" title="Categories">
        {isLoading ? (
          <Menu.Item key="loading">Loading..</Menu.Item>
        ) : (
          <>
            {allCategory?.data?.map((category) => {
              return (
                <Menu.Item
                  key={category._id}
                  onClick={() => router.push(`/category/${category.category_id}`)}
                >
                  {category.category_name}
                </Menu.Item>
              );
            })}
            <Menu.Item key="other">Others</Menu.Item>
          </>
        )}
      </Menu.SubMenu>

      <Menu.Item key="about">About Us</Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
