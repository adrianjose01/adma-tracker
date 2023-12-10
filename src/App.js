import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [isNewUser, setIsNewUser] = useState(false);
  return (
    <div>
      <Header changeUserState={setIsNewUser} isNew={isNewUser} />
      {isNewUser ? <Signup /> : <Login />}
    </div>
  );
}

export default App;
