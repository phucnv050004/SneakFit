import Loading from "@/components/Loading";
// import { useLoading } from "@/contexts/loading";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProductOutlined,
  ReadOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const LayoutAdmin: React.FC = () => {
  const { Header, Sider, Content } = Layout;
  const navigate = useNavigate();
  const userJson = localStorage.getItem("user");
  // const role = userJson ? JSON.parse(userJson)?.user.role : null;

  // useEffect(() => {
  //     if (role !== "admin") {
  //         navigate("/");
  //     }
  // }, [navigate, role]);
  // const { loading } = useLoading();
  // console.log(loading);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
      {/* <Loading isShow={loading} /> */}
      <Layout
        style={{
          marginLeft: "-8px",
          marginTop: "-8px",
          marginBottom: "-8px",
        }}
      >
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ height: "auto" }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "0",
                label: "Hello Admin",
              },
              {
                key: "6",
                icon: <ProductOutlined />,
                label: <NavLink to="/admin">Quản lí sản phẩm</NavLink>,
              },
              {
                key: "1",
                icon: <ProductOutlined />,
                label: <NavLink to="/admin/sizes">Quản lí kích cỡ</NavLink>,
              },
              {
                key: "2",
                icon: <UserOutlined />,
                label: <NavLink to="/admin/auth">Quản lí tài khoản</NavLink>,
              },
              {
                key: "3",
                icon: <ShoppingCartOutlined />,
                label: <NavLink to="/admin/orders">Quản lí đơn hàng</NavLink>,
              },
              {
                key: "4",
                icon: <ReadOutlined />,
                label: <NavLink to="/admin/news">Quản lí tin tức</NavLink>,
              },
              {
                key: "5",
                icon: <LogoutOutlined />,
                label: <NavLink to="/">Thoát</NavLink>,
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutAdmin;
