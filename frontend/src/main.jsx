import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,
        RouterProvider } from 'react-router-dom'
import store from './store';
import {Provider} from 'react-redux';
import App from './App.jsx';
import CreatePage from './pages/CreatePage.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import Dashboad from './pages/Dashboad.jsx';

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

{
  path:"dashboard",
  element:(<Dashboad/>)
}


]);


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router} /> 
  </Provider>
);