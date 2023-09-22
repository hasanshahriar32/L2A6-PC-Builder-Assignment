import { Menu } from "antd";
const LeftMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.Item key="buildPc"> PC Builder</Menu.Item>
      {/* write a submenu component  */}
      <Menu.SubMenu title="Categories">
        <Menu.Item key="CPU">CPU / Processor</Menu.Item>
        <Menu.Item key="Motherboard">Motherboard</Menu.Item>
        <Menu.Item key="RAM">RAM</Menu.Item>
        <Menu.Item key="Power Supply Unit">Power Supply Unit</Menu.Item>
        <Menu.Item key="Storage Device">Storage Device</Menu.Item>
        <Menu.Item key="Monitor">Monitor</Menu.Item>
        <Menu.Item key="Others">Others</Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="about">About Us</Menu.Item>
      <Menu.Item key="contact">Contact Us</Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
