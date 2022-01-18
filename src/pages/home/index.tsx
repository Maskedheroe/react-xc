import React, { Component } from "react"
import "./style.css"
import { Col, Row, Typography } from "antd"
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
} from "../../components"
import { productList1, productList2, productList3 } from "./mockup"
import sideImage from "../../assets/images/sider_2019_12-09.png"
import sideImage2 from "../../assets/images/sider_2019_02-04.png"
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png"


export class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="page-content">
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu />
            </Col>
            <Col span={18}>
              <Carousel />
            </Col>
          </Row>
          <ProductCollection
            title={
              <Typography.Title type="warning" level={3}>
                爆款推荐
              </Typography.Title>
            }
            products={productList1}
            sideImage={sideImage}
          />
          <ProductCollection
            title={
              <Typography.Title type="danger" level={3}>
                新品上市
              </Typography.Title>
            }
            products={productList2}
            sideImage={sideImage2}
          />
          <ProductCollection
            title={
              <Typography.Title type="success" level={3}>
                国内游推荐
              </Typography.Title>
            }
            products={productList3}
            sideImage={sideImage3}
          />
        </div>
        <Footer />
      </>
    )
  }
}
