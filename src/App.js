import SignUpForm from "./containers/SignUpForm/SignUpForm";
import SignInForm from "./containers/SignInForm/SignInForm";
import { Routes, Route } from "react-router-dom"
import "./App.css";
import ErrorPage from "./containers/ErrorPage/ErrorPage";
import Dashboard from "./containers/Dashboard/Dashboard";
import SettingPage from "./containers/SettingPage/SettingPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/register-form" element={<SignUpForm />} />
        <Route path="/sign-in-form" element={<SignInForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/setting" element={<SettingPage />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}


export default App;
