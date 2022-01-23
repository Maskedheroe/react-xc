import React from "react"
import { Layout, Typography, Input, Dropdown, Menu, Button } from "antd"
import { GlobalOutlined } from "@ant-design/icons"
import ButtonGroup from "antd/lib/button/button-group"
import "./style.css"
import logo from "../../assets/logo.svg"
import { withRouter, RouteComponentProps } from "react-router-dom"
import { connect } from "react-redux"
import { Dispatch } from "redux"
import store from "../../redux/store"
import { withTranslation, WithTranslation } from "react-i18next"
import {
  addLanguageActionCreator,
  changeLanguageActionCreator,
} from "../../redux/language/languageActions"
import { RootState } from "../../redux/store"

const mapStateToProps = (state: RootState) => {
  return {
    language: state.language.language,
    languageList: state.language.languageList,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeLanguage: (code: "zh" | "en") => {
      const action = changeLanguageActionCreator(code)
      dispatch(action)
    },
    addLanguage: (name: string, code: string) => {
      const action = addLanguageActionCreator(name, code)
      dispatch(action)
    },
  }
}

type PropsType = RouteComponentProps & // 路由注入的props类型
  WithTranslation & // i18N 注入的props类型
  ReturnType<typeof mapStateToProps> & // react-redux注入的props类型
  ReturnType<typeof mapDispatchToProps> // dispatch注入的props类型，这样便能够在props中直接点出你想要的属性

class HeaderComponent extends React.Component<PropsType> {
  constructor(props: any) {
    super(props)
    const storeState = store.getState()
  }
  handleStoreChange = () => {
    const storeState = store.getState()
    this.setState({
      language: storeState.language.language,
      languageList: storeState.language.languageList,
    })
  }
  menuClickHandler = (e: any) => {
    if (e.key === "new") {
      this.props.addLanguage("新语言", "newlang")
      return
    }
    this.props.changeLanguage(e.key)
  }
  render() {
    const handleRegister = () => {
      history.push("register")
    }
    const handleLogin = () => {
      history.push("signIn")
    }
    const { history, t } = this.props
    return (
      <div className="app-header">
        {/* top-header */}
        <div className="top-header">
          <div className="inner">
            <Typography.Text>{t("header.slogan")}</Typography.Text>
            <Dropdown.Button
              style={{ marginLeft: 15 }}
              overlay={
                <Menu onClick={this.menuClickHandler}>
                  {this.props.languageList.map((lang) => {
                    return <Menu.Item key={lang.code}>{lang.name}</Menu.Item>
                  })}
                  <Menu.Item key={"new"}>添加新语言</Menu.Item>
                </Menu>
              }
              icon={<GlobalOutlined />}
            >
              {this.props.language === "zh" ? "中文" : "English"}
            </Dropdown.Button>
            <Button.Group className="button-group">
              <Button onClick={() => history.push("register")}>
                {t("header.register")}
              </Button>
              <Button onClick={() => history.push("signIn")}>
                {t("header.signin")}
              </Button>
            </Button.Group>
          </div>
        </div>
        {/* Layout */}
        <Layout.Header className="main-header">
          <span onClick={() => history.push("/")}>
            <img src={logo} alt="" className="App-logo" />
            <Typography.Title level={3} className="title">
              React旅游网
            </Typography.Title>
          </span>
          <Input.Search
            placeholder={"请输入目的地"}
            className="search-input"
          ></Input.Search>
        </Layout.Header>
        {/* Layout */}
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
}

export const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(withRouter(HeaderComponent)))
