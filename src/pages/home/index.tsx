import React, { Component } from "react"
import "./style.css"
import { Col, Row, Typography, Spin } from "antd"
import {
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  Header,
} from "../../components"
// import { productList1, productList2, productList3 } from "./mockup"
import sideImage from "../../assets/images/sider_2019_12-09.png"
import sideImage2 from "../../assets/images/sider_2019_02-04.png"
import sideImage3 from "../../assets/images/sider_2019_02-04-2.png"
import { withTranslation, WithTranslation } from "react-i18next"
import axios from "axios"
import { connect, MapStateToProps } from "react-redux"
import { RootState } from "../../redux/store"
import {
  fetchRecommendProductFailActionCreator,
  fetchRecommendProductStartActionCreator,
  fetchRecommendProductSuccessActionCreator,
  giveMeDataActionCreator,
} from "../../redux/recommendProducts/recommendProductsActions"

const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
    productList: state.recommendProducts.productList,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  // return {
  //   fetchStart: () => {
  //     dispatch(fetchRecommendProductStartActionCreator())
  //   },
  //   fetchSuccess: (data: any) => {
  //     dispatch(fetchRecommendProductSuccessActionCreator(data))
  //   },
  //   fetchFail: (error: any) => {
  //     dispatch(fetchRecommendProductFailActionCreator(error))
  //   },
  // }
  return {
    giveMeData() {
      dispatch(giveMeDataActionCreator())
    }
  }
}

type PropsType = WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

class HomePageComponent extends React.Component<PropsType> {
  componentDidMount() {
    this.props.giveMeData()
  }

  render() {
    const { t, productList, loading, error } = this.props
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
        ></Spin>
      )
    }
    if (error) {
      return <div>网站出错了: error</div>
    }
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
              <Typography.Title level={3} type="warning">
                {t("home_page.hot_recommended")}
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList[0].touristRoutes}
          ></ProductCollection>
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t("home_page.new_arrival")}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList[1].touristRoutes}
          ></ProductCollection>
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                {t("home_page.domestic_travel")}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList[2].touristRoutes}
          ></ProductCollection>
        </div>
        <Footer />
      </>
    )
  }
}

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomePageComponent))
