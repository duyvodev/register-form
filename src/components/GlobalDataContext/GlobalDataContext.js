import React, { useContext, useEffect, useState } from "react";
import api from "../../api/user";

const GlobalDataContext = React.createContext();

function GlobalDataProvider(props) {
  const [loadingSignUpStatus, setLoadingSignUpStatus] = useState(false);
  const [loadingSignInStatus, setLoadingSignInStatus] = useState(false);
  const [userData, setUserDate] = useState({});

  const changeLoadingSignUpStatus = (status) => {
    setLoadingSignInStatus(status)
  }

  const hideLoading = () => {
    setLoadingSignUpStatus(false);
  };
  const showLoading = () => {
    setLoadingSignUpStatus(true);
  };

  function getToken(user){
    if(user.userName === "admin" && user.passwd === "123123asd"){
      return {
        "status": 200,
        "role": "admin",
        "token": "ADMIN999666111"
      }
    }
    else if(user.userName === "user123" && user.passwd === "asdasd123"){
      return {
        "status": 200,
        "role": "user",
        "token": "USER91239912390"
      }
    }
    else{
      return {
        "status": 401,
      }
    }
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
    setUserDate(data);
  }

  const providerValues = {
    loadingSignUpStatus,
    loadingSignInStatus,
    fetchUserData,
    changeLoadingSignUpStatus,
    getToken
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
