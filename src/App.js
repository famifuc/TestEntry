import logo from './logo.svg';
import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ListProductComponent from './components/ListProductComponent';
import CreateProductComponent from './components/CreateProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import ListCustomerComponent from './components/ListCustomerComponent';
import CreateCustomerComponent from './components/CreateCustomerComponent';
import UpdateCustomerComponent from './components/UpdateCustomerComponent';
import ListOrderComponent from './components/ListOrderComponent';
import CreateOrderComponent from './components/CreateOrderComponent';
import UpdateOrderComponent from './components/UpdateOrderComponent';
import ListStockComponent from './components/ListStockComponent';
import CreateStockComponent from './components/CreateStockComponent';
import UpdateStockComponent from './components/UpdateStockComponent';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
          <div className="container"> 
            <Routes>
              <Route path = "/" exact component = {ListProductComponent}></Route>
              <Route path = "/products" component = {ListProductComponent}></Route> 
              <Route path = "/add-product/:id" component = {CreateProductComponent}></Route>
              <Route path = "/update-product/:id" component = {UpdateProductComponent}></Route>
              <Route path = "/customers" component = {ListCustomerComponent}></Route>
              <Route path = "/add-customer/:id" component = {CreateCustomerComponent}></Route>
              <Route path = "/update-customer/:id" component = {UpdateCustomerComponent}></Route>
              <Route path = "/orders" component = {ListOrderComponent}></Route>
              <Route path = "/add-order/:id" component = {CreateOrderComponent}></Route>
              <Route path = "/update-order/:id" component = {UpdateOrderComponent}></Route>
              <Route path = "/stocks" component = {ListStockComponent}></Route>
              <Route path = "/add-stock/:id" component = {CreateStockComponent}></Route>
              <Route path = "/update-stock/:id" component = {UpdateStockComponent}></Route> 
            </Routes>  
          </div>
      </Router>
    </div>
  );
}

export default App;
