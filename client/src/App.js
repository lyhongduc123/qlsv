import { element } from "prop-types";
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Login from "./pages/Login";
import "./style.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>
    },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>

    </div>
  );
}

export default App;