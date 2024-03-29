import React from "react"
import { Image, Typography } from "antd"
import { withRouter, RouteComponentProps, Link } from "react-router-dom"

// 继承Route的props 便可以通过props调用route的方法了
interface PropsType extends RouteComponentProps {
  id: string | number
  size: "large" | "small"
  imageSrc: string
  price: number | string
  title: string
}

const ProductImageComponent: React.FC<PropsType> = ({
  id,
  size,
  imageSrc,
  price,
  title
}) => {
  return (
    <Link to={`detail/${id}`}>
      {size === "large" ? (
        <Image src={imageSrc} height={285} width={490} />
      ) : (
        <Image src={imageSrc} height={120} width={240} />
      )}
      <div>
        <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
        <Typography.Text type="danger" strong>
          ¥ {price} 起
        </Typography.Text>
      </div>
    </Link>
  )
}

export const ProductImage = withRouter(ProductImageComponent)