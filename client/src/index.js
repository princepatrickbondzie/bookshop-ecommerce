import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import UserContextProvider from "./context/UserContext";
import AuthContextProvider from "./context/AuthContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/Product/ProductPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import MerchantPage from "./Pages/Merchant/MerchantPage";
import reportWebVitals from "./reportWebVitals";
import ProfilePage from "./Pages/ProfilePage";
import CreateProduct from "./Pages/CreateProduct/CreateProduct";
import ProductDetails from "./Pages/Product/ProductDetails";
// import Footer from "./Components/Footer/Footer";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/products" component={ProductPage} />
            <Route path="/merchant" component={MerchantPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/createproduct" component={CreateProduct} />
            <Route path="/productdetails" component={ProductDetails} />
          </Switch>
          {/* <Footer /> */}
        </BrowserRouter>
      </UserContextProvider>
    </AuthContextProvider>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
