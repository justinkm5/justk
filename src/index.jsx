import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./frontpage.jsx";
import Products from "./products.jsx";
import Register from "./register.jsx";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={FrontPage} />
      <Route path="/products" component={Products} />
      <Route path="/login" component={Register} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("wrapper"));
