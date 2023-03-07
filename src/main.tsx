import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';
import App from './App';
import Layout from './components/Layout/Layout';

import { Provider } from 'react-redux';
import { store } from './app/store';
import SignIn from './pages/SignIn/SignIn';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: '/signin',
    element: (
      <Layout>
        <SignIn />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
