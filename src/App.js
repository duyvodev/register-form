import SignUpForm from "./containers/SignUpForm/SignUpForm";
import SignInForm from "./containers/SignInForm/SignInForm";
import { Routes, Route, Link } from "react-router-dom"
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/sign-in-form" element={<SignInForm />} />
      </Routes>

    </div>
  );
}


export default App;
