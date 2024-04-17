import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SidebarProvider } from './Context/sidebar_context';
import { CoursesProvider } from './Context/courses_context';
import { CartProvider } from './Context/cart_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <SidebarProvider>
    <CoursesProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </CoursesProvider>
  </SidebarProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
