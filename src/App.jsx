import './App.css'
import Nav from "./components/Navigation";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <div>
      <Outlet />
    </div>
  )

}

export default App
