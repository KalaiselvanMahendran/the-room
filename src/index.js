import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import App from "./App";
import NewUser from "./NewUser";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Dashboard  from "./Dashboard";
import VendorBoard  from "./VendorBoard";
import AddProduct from "./AddProduct";
import Logout from "./Logout";
import Buyer from './Buyer'
import Testv from "./Testv";
import ShowProduct from './ShowProduct';
import EditUser from "./EditUser";
import EditProduct from './EditProduct';
import Setting from './Setting';
if(!window.navigator.onLine) {

  alert('no internet connection, you might run into errors');
  
}
const routing = (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={App} />
      <Route path="/newuser" component={NewUser} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/vendor" component={VendorBoard} />
      <Route path="/addproduct" component={AddProduct} />
      <Route path="/products" component={ShowProduct} />
      <Route path="/buyer" component={Buyer}/>
      <Route path="/product/results" component={Buyer} />
      <Route path="/logout" component={Logout} />
      <Route path="/test" component={Testv} />
      <Route path="/setting" component={Setting} />

      <Route path="/edituser" component={EditUser} />
      <Route path="/edit/product" component={EditProduct} />

    </React.Fragment>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
