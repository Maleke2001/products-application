import Home from "./pages/Home";
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
