import React from "react";
import './style.css'
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Button } from "antd";
const { Header, Footer, Content } = Layout;

export const UserLayout: React.FC = (props) => {
  const menu = (
    <Menu>
      <Menu.Item>中文</Menu.Item>
      <Menu.Item>English</Menu.Item>
    </Menu>
  );

  return (
    <Layout className="user-layout-container">
      <Header className="header">
        <div className="lang">
          <Dropdown overlay={menu}>
            <Button>
              {" "}
              选择语言 <CaretDownOutlined />
            </Button>
          </Dropdown>
        </div>
      </Header>
      <Content className="content">
        <div className="top">
          <div className="content-header">
            <Link to="/">
              <img alt="logo" className="logo" src={logo} />
              <span className="title">React 旅游网</span>
            </Link>
          </div>
          <div className="desc">
            慕课网 是我朝最具影响力的 线上课程学习网站
          </div>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Footer就不写了，太累了</Footer>
    </Layout>
  );
};
