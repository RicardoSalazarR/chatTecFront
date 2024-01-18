import { useState } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Login, Home, SignUp, NavBarComponent, ProtectedRoutes } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* 
      Home
      <NavBarComponent />
      <Home/> */}
      {/* <Login/> */}
      {/* <SignUp/> */}
      <HashRouter>
        {/* <NavBar /> */}
        {/* {isLoading && <LoadingScreen />} */}
        <Routes>
          {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
