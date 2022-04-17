import React, { useEffect } from "react"
import "./style.css"
import { useDispatch } from "react-redux"
import { useLocation, useParams } from "react-router-dom"
import { Header, Footer, FilterArea, ProductList } from "../../components"
import { useSelector } from "../../redux/hooks"
import { Spin } from "antd"
import { searchProduct } from "../../redux/productSearch/slice"
import { MainLayout } from '../../layouts/mainLayout/index';

interface MatchParamas {
  keywords: string
}

export const SearchPage = () => {
  const { keywords } = useParams<MatchParamas>()
  const loading = useSelector((state) => state.productSearch.loading)
  const error = useSelector((s) => s.productSearch.error)
  const pagination = useSelector((s) => s.productSearch.pagination)
  const productList = useSelector((s) => s.productSearch.data)

  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }))
  }, [location])

  const onPageChange = (nextPage, pageSize) => {
    dispatch(searchProduct({ nextPage, pageSize, keywords }))
  }
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
    return <div>网站出错了: {error} </div>
  }
  return (
    <MainLayout>
      <div className="page-content">
        <div className="product-list-container">
          <FilterArea />
        </div>
        <div className="product-list-container">
          <ProductList
            data={productList}
            onPageChange={onPageChange}
            paging={pagination}
          />
        </div>
      </div>
    </MainLayout>
  )
}
