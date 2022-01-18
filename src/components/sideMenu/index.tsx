import React from "react"
import { sideMenuList } from "./mockup"
import "./style.css"
import { Menu } from "antd"
import { GifOutlined } from "@ant-design/icons"

export const SideMenu: React.FC = () => {
  const renderSubMenu = (
    item: {
      title: string
      subMenu: {
        title: string
        subMenu: string[]
      }[]
    },
    index: number
  ) => {
    return (
      <Menu.SubMenu
        key={`${item.title}+index`}
        title={ 
          <span>
            <GifOutlined />
            {item.title}
          </span>
        }
      >
        {item.subMenu.map((sm, smindex) => {
          return (
            <Menu.SubMenu
              key={`${sm.title}-${smindex}`}
              title={
                <span>
                  <GifOutlined />
                  {sm.title}
                </span>
              }
            >
              {sm.subMenu.map((sms, index) => {
                return (
                  <Menu.Item key={`${sms}-${index}`}>
                    <span>
                      <GifOutlined />
                      {sms}
                    </span>
                  </Menu.Item>
                )
              })}
            </Menu.SubMenu>
          )
        })}
      </Menu.SubMenu>
    )
  }
  return (
    <Menu mode="vertical" className='side-menu'>
      {sideMenuList.map((item, index) => renderSubMenu(item, index))}
    </Menu>
  )
}
