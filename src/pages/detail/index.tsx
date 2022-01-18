import React from "react"
import { RouteComponentProps } from "react-router-dom"

interface MatchParams {
  touristRouteId: string
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  return <div>detail: {props.match.params.touristRouteId}</div>
}
