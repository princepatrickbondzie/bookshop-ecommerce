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
import UserAccount from "./Pages/ProfilePage/UserAccount";
import CreateProduct from "./Pages/CreateProduct/CreateProduct";
import ProductDetails from "./Pages/Product/ProductDetails";
import Magazine from "./Pages/Magazine/Mazagine";
import About from "./Pages/About/About";
import Admin from "./Pages/Admin/AdminPage";
import Cart from "./Pages/Cart/Cart";
import AdminRoute from "./routes/AdminRoute";
import Footer from "./Components/Footer/Footer";
import WishList from "./Pages/Wishlist/WishList";
import Login from "./Pages/Admin/Login";
import Signup from "./Pages/Admin/Signup";
import ProductContextProvider from "./context/ProductContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UserContextProvider>
        <ProductContextProvider>
          <BrowserRouter>
            <Switch>
              <AdminRoute path="/admin" component={Admin} />
              <Route path="/" exact component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/admin_login" component={Login} />
              <Route path="/admin_signup" component={Signup} />
              <Route path="/register" component={RegisterPage} />
              <Route path="/products" component={ProductPage} />
              <Route path="/magazine" component={Magazine} />
              <Route path="/merchant" component={MerchantPage} />
              <Route
                path="/product-details/:productId"
                component={ProductDetails}
              />
              <Route path="/cart" component={Cart} />
              <Route path="/account" component={UserAccount} />
              <Route path="/createproduct">
                <CreateProduct />
              </Route>
              <Route path="/wishlist">
                <WishList />
              </Route>
              <Route path="/about" component={About} />
            </Switch>
            <Footer />
          </BrowserRouter>
        </ProductContextProvider>
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
