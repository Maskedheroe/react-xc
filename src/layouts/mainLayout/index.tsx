import React from "react"
import "./style.css"
import { Header, Footer } from "../../components"

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="page-content">
        {children}
      </div>
      <Footer />
    </>
  )
}
