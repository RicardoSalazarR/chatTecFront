import { useState } from "react";
import "./App.css";
import { Login, Home, SignUp, NavBarComponent } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* 
      Home
      <NavBarComponent />
      <Home/> */}
      {/* <Login/> */}
      <SignUp/>
    </>
  );
}

export default App;
