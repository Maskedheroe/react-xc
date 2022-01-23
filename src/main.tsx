import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "antd/dist/antd.css"
import "./i18n/configs"
import store from "./redux/store"
import { Provider } from "react-redux"
import axios from 'axios';

axios.defaults.headers.common['x-icode'] = 'A76774E821B9AB65'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
