import { Routes, Route } from "react-router-dom";
import SignUpForm from "./containers/SignUpForm/SignUpForm";
import SignInForm from "./containers/SignInForm/SignInForm";
import "./App.css";
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import Dashboard from "./containers/Dashboard/Dashboard";
import SettingPage from "./containers/SettingPage/SettingPage";
import Navigator from "./containers/Navigator/Navigator";
import { useEffect, useState } from "react";
import { useGlobalData } from "./components/GlobalDataContext/GlobalDataContext";
import CRUDpage from "./containers/CRUDPage/CRUDPage";

function App() {
  const { userToken } = useGlobalData();

  return (
    <div className="app">
      <Routes>
        <Route path="/register-form" element={<SignUpForm />} />
        <Route path="/sign-in-form" element={<SignInForm />} />
        {
          userToken.role === "crudUser"
            ?
            (
              <Route path="/" element={<Navigator />}>
                <Route path="/crudpage" element={<CRUDpage />} />
              </Route>
            )
            :
            (
              <Route path="/" element={<Navigator />}>
                <Route path="/dashboard" element={<Dashboard />} />
                {userToken.role === "admin" ? (
                  <Route path="/setting" element={<SettingPage />} />
                ) : null}
              </Route>
            )
        }
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
