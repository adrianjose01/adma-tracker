import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CreateTranx from "./components/CreateTranx";
import TranxList from "./components/TranxList";
import ChangeName from "./components/ChangeName";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <Header
        changeUserState={setIsNewUser}
        isLoggedIn={isLoggedIn}
        setLogOut={setIsLoggedIn}
        isNew={isNewUser}
      />
      <Routes>
        <Route
          path="/"
          element={
            isNewUser ? (
              <Signup changeUserState={setIsNewUser} />
            ) : (
              <Login setIsLoggedIn={setIsLoggedIn} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <CreateTranx setIsLoggedIn={setIsLoggedIn} />
              <TranxList />
            </PrivateRoute>
          }
        />
        <Route
          path="/reset"
          element={
            <PrivateRoute>
              <ChangeName setIsLoggedIn={setIsLoggedIn} />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
