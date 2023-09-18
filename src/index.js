import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import BlogsProvider from './context/BlogsProvider';

const root = createRoot(document.getElementById('root'))

root.render(
<BlogsProvider>
<App/>
</BlogsProvider>
)