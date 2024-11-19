import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,
        RouterProvider } from 'react-router-dom'
import store from './store'

import App from './App.jsx';
import CreatePage from './pages/CreatePage.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';

const router = createBrowserRouter([
{
  path:"/",
  element:(<App/>)
},
{
  path: "createProduct",
  element:(<CreatePage/>)

},

{
  path:"signin",
 element:(<Signin/>)
},
{
  path:"signup",
element:(<Signup/>)
},

]);


createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} /> 
);