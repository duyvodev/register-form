import "./styles.css";
import { Link } from "react-router-dom";
import { useGlobalData } from "../../components/GlobalDataContext/GlobalDataContext";

export default function Dashboard() {
  const { userToken } = useGlobalData();
  const token = userToken.token;
  console.log(token);
  return (
    <>
      <div className="dashboard">
        <nav className="dashboardNav">
          {token === "ADMIN9123970928" ? (
            <li className="dashboardItems">
              <Link className="dashboardLink" to="/setting">
                setting
              </Link>
            </li>
          ) : null}
          <li className="dashboardItems">
            <Link className="dashboardLink" to="/sign-in-form">
              logout
            </Link>
          </li>
        </nav>
        <h1 className="dashboardWords">dashboard</h1>
      </div>
    </>
  );
}
