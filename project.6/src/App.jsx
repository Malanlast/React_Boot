import Dashboard from './Pages/Dashboard/Dashboard';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import SupportPage from './Pages/Support/Support';
import TransactionPage from './Pages/Transaction/Transaction';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/transaction",
    element: <TransactionPage/>,
  },
   {
    path: "/support",
    element: <SupportPage/>,
  },
]);
 const App=()=> {
	return (
		<>
		<RouterProvider router={router} />
         
		</>
	
	)
 }
 
 export default App
 