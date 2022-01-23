import React, { useState } from "react"
import { useEffect } from "react"
import { RouteComponentProps, useParams } from "react-router-dom"
import axios from "axios"
import {
  Spin,
  Row,
  Col,
  DatePicker,
  Divider,
  Typography,
  Anchor,
  Menu,
  Button,
} from "antd"
import "./style.css"
import { Header, Footer, ProductIntro } from "../../components"
import { ProductComments } from '../../components/productComments/ProductComments';
import { commentMockData } from "./mockup"

const { RangePicker } = DatePicker

interface MatchParams {
  touristRouteId: string
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  const { touristRouteId } = useParams<MatchParams>()
  const [loading, setLoading] = useState<boolean>(true)
  const [product, setProduct] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(
          `http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`
        )
        setProduct(data)
        setLoading(false)
      } catch (error) {
        setError(String(error))
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  if (loading) {
    return (
      <Spin
        size="large"
        style={{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    )
  }
  if (error) {
    return <div>网站出错: {error}</div>
  }
  return (
    <div className='page-content'>
      <Header />
      <Row>
        <Col span={13}>
          <ProductIntro
            title={product.title}
            shortDescription={product.description}
            price={product.originalPrice}
            coupons={product.coupons}
            points={product.points}
            discount={product.price}
            rating={product.rating}
            pictures={product.touristRoutePictures.map((p) => p.url)}
          />
        </Col>
        <Col span={11}>
          <Button
            style={{ marginTop: 50, marginBottom: 30, display: "block" }}
            type="primary"
            danger
            // loading={shoppingCartLoading}
            onClick={() => {
              // dispatch(addShoppingCartItem({ jwt, touristRouteId: product.id }))
            }}
          >
            {/* <ShoppingCartOutlined></ShoppingCartOutlined> */}
            放入购物车
          </Button>
          <RangePicker open style={{ marginTop: 20 }} />
        </Col>
      </Row>
      <Anchor className="product-detail-anchor">
        <Menu mode="horizontal">
          <Menu.Item key="1">
            <Anchor.Link href="#feature" title="产品特色"></Anchor.Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Anchor.Link href="#fees" title="费用"></Anchor.Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Anchor.Link href="#notes" title="预订须知"></Anchor.Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Anchor.Link href="#comments" title="用户评价"></Anchor.Link>
          </Menu.Item>
        </Menu>
      </Anchor>
      <div id="feature" className="product-detail-container">
        <Divider orientation={"center"}>
          <Typography.Title level={3}>产品特色</Typography.Title>
        </Divider>
        <div
          dangerouslySetInnerHTML={{ __html: product.features }}
          style={{ margin: 50 }}
        ></div>
      </div>
      <div id="fees" className="product-detail-container">
        <Divider orientation={"center"}>
          <Typography.Title level={3}>费用</Typography.Title>
        </Divider>
        <div
          dangerouslySetInnerHTML={{ __html: product.fees }}
          style={{ margin: 50 }}
        ></div>
      </div>
      <div id="notes" className="product-detail-container">
        <Divider orientation={"center"}>
          <Typography.Title level={3}>预定须知</Typography.Title>
        </Divider>
        <div
          dangerouslySetInnerHTML={{ __html: product.notes }}
          style={{ margin: 50 }}
        ></div>
      </div>
      <div id="comments" className="product-detail-container">
        <Divider orientation={"center"}>
          <Typography.Title level={3}>用户评价</Typography.Title>
        </Divider>
        <div style={{ margin: 40 }}>
          <ProductComments data={commentMockData} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
