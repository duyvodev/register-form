import React, { useContext, useEffect, useState } from "react";
import api from "../../api/user";

const GlobalDataContext = React.createContext();

function GlobalDataProvider(props) {
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [userData, setUserDate] = useState({});

  const hideLoading = () => {
    setLoadingStatus(false);
  };
  const showLoading = () => {
    setLoadingStatus(true);
  };

  //   useEffect(() => {
  //     fetchUserData();
  //     // eslint-disable-next-line
  //   }, []);

  async function fetchUserData() {
    showLoading();
    const data = await api.register();
    if (data) {
      console.log("Fetch data: ");
      console.log(data);
      hideLoading();
    }
    setUserDate(data);
  }

  // const setField = (field, val) => {
  //   const _value = { ...value };
  //   _value[field] = val;
  //   setValue(_value);
  // };

  const providerValues = {
    loadingStatus,
    fetchUserData,
    // hideLoading,
    // showLoading,
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
