import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import BlogPostList from './components/BlogPostList';
import BlogPostDetail from './components/BlogPostDetail'
import Layout from './Layout';
import axios from 'axios';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route >
      <Route path='/' element={<Layout />}>
        <Route index element={<BlogPostList />} />
        <Route path='/post/:name' element={<BlogPostDetail />}
         loader={({params})=> fetch(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=1800bf318f3b461781a8abc7f12f1215/${params.articles}`)} />
      </Route>
    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
