import React from "react"
import { Layout, Typography, Input, Dropdown, Menu, Button } from "antd"
import { GlobalOutlined } from "@ant-design/icons"
import ButtonGroup from "antd/lib/button/button-group"
import "./style.css"
import logo from "../../assets/logo.svg"
import { useSelector } from "../../redux/hooks"
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom"
import { useDispatch } from "react-redux"
import { Dispatch } from "redux"
import {
  addLanguageActionCreator,
  changeLanguageActionCreator,
  LanguageActionTypes,
} from "../../redux/language/languageActions"
import { useTranslation } from 'react-i18next'

export const Header: React.FC = () => {
  const history = useHistory()
  const location = useLocation()
  const params = useParams()
  const match = useRouteMatch()
  const language = useSelector((state) => state.language.language)
  const languageList = useSelector((state) => state.language.languageList)
  // const dispatch = useDispatch<Dispatch<LanguageActionTypes>>()
  const dispatch = useDispatch()

  const handleRegister = () => { 
    history.push("register")
  }
  const handleLogin = () => {
    history.push("signIn")
  }
  const menuClickHandler = (e: any) => {
    if (e.key === "new") {
      dispatch(addLanguageActionCreator("新语言", "new_lang"))
    } else {
      dispatch(changeLanguageActionCreator(e.key))
    }
  }
  const { t } = useTranslation()
  return (
    <div className="app-header">
      {/* top-header */}
      <div className="top-header">
        <div className="inner">
          <Typography.Text>让旅游更幸福</Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu onClick={menuClickHandler}>
                {languageList.map((lang) => {
                  return <Menu.Item key={lang.code}>{lang.name}</Menu.Item>
                })}   
                <Menu.Item key={"new"}>添加新语言</Menu.Item>
              </Menu>
            }
            icon={<GlobalOutlined />}
          >
            {language === "zh" ? "中文" : "English"}
          </Dropdown.Button>
          <ButtonGroup className="button-group">
            <Button onClick={handleRegister}>注册</Button>
            <Button onClick={handleLogin}>登录</Button>
          </ButtonGroup>
        </div>
      </div>
      <Layout.Header className="main-header">
        <span onClick={() => history.push("/")}>
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
      <Menu mode={"horizontal"} className="main-menu">
        <Menu.Item key="1"> {t("header.home_page")} </Menu.Item>
        <Menu.Item key="2"> {t("header.weekend")} </Menu.Item>
        <Menu.Item key="3"> {t("header.group")} </Menu.Item>
        <Menu.Item key="4"> {t("header.backpack")} </Menu.Item>
        <Menu.Item key="5"> {t("header.private")} </Menu.Item>
        <Menu.Item key="6"> {t("header.cruise")} </Menu.Item>
        <Menu.Item key="7"> {t("header.hotel")} </Menu.Item>
        <Menu.Item key="8"> {t("header.local")} </Menu.Item>
        <Menu.Item key="9"> {t("header.theme")} </Menu.Item>
        <Menu.Item key="10"> {t("header.custom")} </Menu.Item>
        <Menu.Item key="11"> {t("header.study")} </Menu.Item>
        <Menu.Item key="12"> {t("header.visa")} </Menu.Item>
        <Menu.Item key="13"> {t("header.enterprise")} </Menu.Item>
        <Menu.Item key="14"> {t("header.high_end")} </Menu.Item>
        <Menu.Item key="15"> {t("header.outdoor")} </Menu.Item>
        <Menu.Item key="16"> {t("header.insurance")} </Menu.Item>
      </Menu>
    </div>
  )
}
