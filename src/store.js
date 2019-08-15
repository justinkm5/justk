import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducers";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const initialState = {};
const store = createStore(
  initialState,
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
