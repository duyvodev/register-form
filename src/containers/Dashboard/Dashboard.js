import "./styles.css";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();
  let location = useLocation();
  const userToken = JSON.parse(localStorage.getItem("userToken"));

  useEffect(() => {
    if (userToken) {
      navigate("/dashboard");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="dashboard">
        <h1 className="dashboardWords">dashboard</h1>
      </div>
    </>
  );
}
