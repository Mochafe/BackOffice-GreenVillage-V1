import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Style Import
import './assets/css/bootstrap.css';
import './assets/javascript/bootstrap.bundle';
import './assets/css/style.css'

//Routes, Loader & Action Import
import ErrorPage from './routes/error';
import App from './app';
import Home from './routes/home';
import ProductList, { loader as productListLoader } from './routes/product/productList';
import ProductView, { loader as productViewLoader } from './routes/product/productView';
import { action as productDeleteAction } from './routes/product/productDelete';
import Order from './routes/order';
import Account from './routes/account';

//Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: "/product/list",
        element: <ProductList />,
        loader: productListLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/product/:product/view",
        element: <ProductView />,
        loader: productViewLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "/product/:product/edit",
        action: productDeleteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/product/:product/delete",
        action: productDeleteAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "/category",
        errorElement: <ErrorPage />,
      },
      {
        path: "/order",
        element: <Order />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/account",
        element: <Account />,
        errorElement: <ErrorPage />,

      },
      {
        path: "*",
        element: <ErrorPage />,
        errorElement: <ErrorPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
