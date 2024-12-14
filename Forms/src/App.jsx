import HomePage from "./homepage/Homepage";
import Login from "./Login/login";
import Register from "./Register/Register";
import { BrowserRouter, Routes, Route } from "react-router";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
