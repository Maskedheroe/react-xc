import React from 'react'
import { Layout, Typography } from "antd"
import './style.css'
export const Footer = () => {
  return (
    <div>
      <Layout.Footer>
        <Typography.Title level={3} style={{textAlign: 'center'}}>
          版权所有
        </Typography.Title>
      </Layout.Footer>
    </div>
  )
}
