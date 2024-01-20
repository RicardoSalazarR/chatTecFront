import { useState } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Login, Home, SignUp, NavBarComponent, ProtectedRoutes, ItemDetails, Acercade } from "./components";

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
        <NavBarComponent />
        {/* {isLoading && <LoadingScreen />} */}
        <Routes>
          {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/acercade" element={<Acercade />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<ItemDetails />} />

          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
