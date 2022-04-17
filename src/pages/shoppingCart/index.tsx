import React from "react"
import "./style.css"
import { MainLayout } from "../../layouts/mainLayout/index"
import { Row, Col, Affix } from "antd"
import { ProductList, PaymentCard } from "../../components"

export const ShoppingCart = () => {
  return (
    <MainLayout>
      <Row>
        {/* 购物车清单 */}
        <Col span={16}>
          <div className="product-list-container">
            {/* <ProductList/> */}
          </div>
        </Col>
        {/* 支付卡组件 */}
        <Col span={8}>
          <div className="payment-card-container">
            {/* <PaymentCard/> */}
          </div>
        </Col>
      </Row>
    </MainLayout>
  )
}
