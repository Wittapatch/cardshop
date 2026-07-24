import Home from "./pages/Home"
import './App.css'
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router";
import Recommended from "./pages/Recommended";

export default function App() {
  return(
    <Routes>

      <Route
        path="/"
        element={<Navigate to="/recommended" replace/>}
      />


      <Route
        path="/recommended"
        element= {
          <>
            <Navbar/>
            <Recommended/>
          </>
        }
      />
{/* 
      <Route
        path="/mylist"
        element={
          <>
            <Navbar/>
          </>
        } 
      /> */}
    </Routes>
  );
}
