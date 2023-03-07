import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const Menu111 = () => {
  return (
    <>
      {/* <Menu
      
        items={[
          {
            key: "1",
            label: "nav 1",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "nav 2",
          },
          {
            key: "3",
            label: "nav 3",
          },
        ]}
      /> */}
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <UserOutlined />
          <span>List User</span>
          <Link to="user" />
        </Menu.Item>
        <Menu.Item key="2">
          <UploadOutlined />
          <span>List Product</span>
          <Link to="product" />
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Menu111;
