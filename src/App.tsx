import './App.css'
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes} from "react-router";
import Recommended from "./pages/Recommended";
export default function App() {


  return(
     <>
        <Navbar/>
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/recommended" replace />}
            />

            <Route
                path="/recommended"
                element={<Recommended />}
            />

        </Routes>
      </>
  );
}
