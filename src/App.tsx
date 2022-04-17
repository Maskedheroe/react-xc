import React from "react"
import "./App.css"
import { HomePage, Register, SignIn, DetailPage, SearchPage } from "./pages"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { ShoppingCart } from './pages/shoppingCart/index';
import { useSelector } from './redux/hooks';

const PrivateRoute = ({ component, isAuthenticated, ...rest }) => {
  const routeComponent = (props) => {
    return isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: "/signIn" }} />
    )
  }
  return <Route render={routeComponent} {...rest}/>
}

const App = () => {
  const jwt = useSelector(s => s.user.token)
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/register" component={Register} />
          <Route path="/detail/:touristRouteId" component={DetailPage} />
          <Route path="/search/:keywords?" component={SearchPage} />
          <PrivateRoute isAuthenticated={jwt !== null} path='/shoppingCart' component={ShoppingCart} />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
