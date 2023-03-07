import { Breadcrumb, Col, Layout, Menu, Row, theme } from "antd";
import "/Users/Admin/Desktop/workspace/vti/react vti/redux-toolkit/src/App.css";
import { ShoppingOutlined } from "@ant-design/icons";
import { Link, Link as LinkRouter } from "react-router-dom";
const { Header, Content, Footer } = Layout;

const HomeLayout = ({ children }) => {
  function getItem(label, key, icon) {
    return {
      key,
      icon,
      label,
    };
  }

  const items = [
    getItem("Trang chủ", "10"),
    getItem("Điện Thoại", "5"),
    getItem("Laptop", "6"),
    getItem("Máy Tính Bảng", "7"),
    getItem("Âm thanh", "8"),
    getItem("Đồng Hồ", "9"),
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header>
        <Row>
          <Col span={12}>
            <div>
              <ul
                style={{
                  display: "flex",
                  color: "white",
                  justifyContent: "space-between",
                  margin: "auto",
                  listStyle: "none",
                }}
              >
                <li>Trang chủ</li>
                <li>Điện Thoại</li>
                <li>Laptop</li>
                <li>Máy Tính Bảng</li>
                <li>Âm thanh</li>
                <li>Đồng Hồ</li>
              </ul>
            </div>
          </Col>
          <Col span={12}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <ShoppingOutlined
                style={{
                  color: "white",
                  fontSize: "60px",
                }}
              ></ShoppingOutlined>
            </div>
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default HomeLayout;
