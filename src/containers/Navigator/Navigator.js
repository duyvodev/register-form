import "./styles.css";

import { Link, Outlet } from "react-router-dom";

export default function Navigator() {
  const userData = JSON.parse(localStorage.getItem("userToken"));

  const handleOnClick = () => {
    localStorage.removeItem("userToken");
  };
  return (
    <>
      <nav className="navigatorWrapper">
        {userData.role === "admin" ? (
          <li className="navigatorItems">
            <Link className="navigatorLink" to="/setting">
              setting
            </Link>
          </li>
        ) : null}
        {(userData.role === "admin" || userData.role === "user") ?
          (<li className="navigatorItems">
            <Link
              onClick={handleOnClick}
              className="navigatorLink"
              to="/dashboard"
            >
              dashboard
            </Link>
          </li>) : null}
        <li className="navigatorItems">
          <Link
            onClick={handleOnClick}
            className="navigatorLink"
            to="/sign-in-form"
          >
            logout
          </Link>
        </li>
      </nav>
      <Outlet />
    </>
  );
}
