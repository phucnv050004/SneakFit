import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
import { configureAxios } from './config/axios.ts';
configureAxios();
import "react-toastify/ReactToastify.min.css";
import LoadingProvider from './contexts/loading.tsx';
import { UserProvider } from './contexts/user.tsx';
import { CartProvider } from './contexts/cart.tsx';
import { OrderProvider } from './contexts/order.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <UserProvider>
          <CartProvider>
            <OrderProvider>
              <App />
            </OrderProvider>
          </CartProvider>
        </UserProvider>
      </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
=======
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter> 
        <App />
  </BrowserRouter>
</StrictMode>
>>>>>>> 2c5f47de239574855e1ab1b31020e89be2a26a96
)
