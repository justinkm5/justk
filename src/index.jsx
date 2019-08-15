import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./frontpage.jsx";
import Products from "./products.jsx";
import Register from "./register.jsx";
import Login from "./login.jsx";

// Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FrontPage} />
        <Route path="/products" component={Products} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("wrapper"));
