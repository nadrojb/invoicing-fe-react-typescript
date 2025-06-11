
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";


function App() {

  return (
      <>
        <BrowserRouter>
          <Routes>
            {/*  <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
