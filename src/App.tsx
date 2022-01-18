import React from "react"
import "./App.css"
import { HomePage, Register, SignIn, DetailPage } from "./pages"
import { BrowserRouter, Route, Switch } from "react-router-dom"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/signIn" component={SignIn}/>
          <Route path="/register" component={Register}/>
          <Route path='/detail/:touristRouteId' component={DetailPage}/>
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
