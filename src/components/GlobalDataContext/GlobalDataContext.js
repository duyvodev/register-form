import React, { useContext, useEffect, useState } from "react";
import api from "../../api/user";

const GlobalDataContext = React.createContext();
// const userStore = JSON.parse(localStorage.getItem("userToken")) || {}

function GlobalDataProvider(props) {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [userData, setUserData] = useState({});
  const [userToken, setUserToken] = useState({});

  const hideLoading = () => {
    setLoadingStatus(false);
  };
  const showLoading = () => {
    setLoadingStatus(true);
  };

  async function getToken(userName, userPasswd) {
    showLoading()
    const rs = await api.login(userName, userPasswd)
    if (rs) {
      hideLoading()
    }
    localStorage.setItem("userToken", JSON.stringify({ ...rs }))
    setUserToken(rs)
    console.log(rs)
  }

  async function fetchUserData() {
    showLoading();
    const data = await api.register();
    if (data) {
      console.log("Fetch data: ");
      console.log(data);
      hideLoading();

      const notification = document.querySelector(".notificationWrapper")
      notification.classList.add("notificationDisplay")
      setTimeout(() => {
        notification.classList.remove("notificationDisplay")
      }, 2000);
    }
    setUserData(data);
  }

  const providerValues = {
    loadingStatus,
    fetchUserData,
    getToken,
    userToken
  };

  return (
    <GlobalDataContext.Provider value={providerValues}>
      {props.children}
    </GlobalDataContext.Provider>
  );
}

function useGlobalData() {
  return useContext(GlobalDataContext);
}

export default GlobalDataContext;
export { GlobalDataProvider, useGlobalData };
