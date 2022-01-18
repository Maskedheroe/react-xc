import React from "react"
import { Layout, Typography, Input, Dropdown, Menu, Button } from "antd"
import { GlobalOutlined } from "@ant-design/icons"
import ButtonGroup from "antd/lib/button/button-group"
import "./style.css"
import logo from "../../assets/logo.svg"
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom"

export const Header = () => {
  const history = useHistory()
  const location = useLocation()
  const params = useParams()
  const match = useRouteMatch()
  const handleRegister = () => {
    history.push("register")
  }
  const handleLogin = () => {
    history.push("signIn")
  }
  return (
    <div className="app-header">
      {/* top-header */}
      <div className="top-header">
        <div className="inner">
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu>
                <Menu.Item>中文</Menu.Item>
                <Menu.Item>英文</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            语言
          </Dropdown.Button>
          <ButtonGroup className="button-group">
            <Button onClick={handleRegister}>注册</Button>
            <Button onClick={handleLogin}>登录</Button>
          </ButtonGroup>
        </div>
      </div>
      <Layout.Header className="main-header">
        <span onClick={() => history.push('/')}>
          <img src={logo} alt="" className="App-logo" />
          <Typography.Title level={3} className="title">
            React旅游网
          </Typography.Title>
          <Input.Search
            className="search-input"
            placeholder="请输入旅游目的地、主题、或关键字"
          ></Input.Search>
        </span>
      </Layout.Header>
      <Menu mode="horizontal" className="main-menu">
        <Menu.Item key={1}>lysy</Menu.Item>
      </Menu>
    </div>
  )
}
