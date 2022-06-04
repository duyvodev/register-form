import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./styles.css";
import FormWrapper from "../../components/FormWrapper/FormWrapper";
import FormHeader from "../../components/FormHeader/FormHeader";
import FormItem from "../../components/FormItem/FormItem";
import Button from "../../components/Button/Button";
import Notification from "../../components/Notification/Notification";
import Loader from "../Loader/Loader";
import { useGlobalData } from "../../components/GlobalDataContext/GlobalDataContext";

export default function SignUpForm() {
  let navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [passwdType, setPasswdType] = useState("password");
  const [passwd, setPasswd] = useState("");

  const [userNameValidation, setUserNameValidation] =
    useState("*Valid user name");
  const [userNameColor, setUserNameValidationColor] = useState("");
  const [userNameHidden, setUserNameHidden] = useState(true);

  const [passWdValidation, setPassWdValidation] = useState("*Valid passWd");
  const [passWdValidationColor, setPassWdValidationColor] = useState("");
  const [passWdHidden, setPassWdHidden] = useState(true);

  // LOCAL STORAGE ==> Save users' data
  const { loadingStatus, getToken } = useGlobalData();
  //   Click button
  const handleSubmit = () => {
    // let resultJson = "";
    handleBlurUserName();
    handleBlurPasswd();

    if (handleBlurUserName() && handleBlurPasswd()) {
      getToken(userName, passwd).then((userToken) => {
        if (userToken.role === "admin" || userToken.role === "user") {
          navigate("/dashboard");
        }
        else if (userToken.role === "crudUser") {
          navigate("/crudpage")
        }
      });
    }
  };

  //   UserName
  const handleInputUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleBlurUserName = () => {
    if (userName === "") {
      setUserNameValidation("*Please enter user name");
      setUserNameValidationColor("red");
      setUserNameHidden(false);
    } else {
      setUserNameHidden(true);
      return true;
    }
  };

  //   Toggle password visibility
  const handleTogglePw = (e) => {
    if (passwdType === "password") {
      setPasswdType("text");
    } else {
      setPasswdType("password");
    }
  };

  // Hide notification when click on
  const hideNotification = (e) => {
    const notification = document.querySelector(".notificationWrapper");
    notification.classList.remove("notificationDisplay");
  };

  //   Password
  const handleInputPasswd = (e) => {
    setPasswd(e.target.value);
  };
  const handleBlurPasswd = () => {
    if (passwd === "") {
      setPassWdValidation("*Please enter your password");
      setPassWdValidationColor("red");
      setPassWdHidden(false);
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwd)) {
      setPassWdValidation(
        "*Password contains minimum eight characters, at least one letter and one number"
      );
      setPassWdValidationColor("red");
      setPassWdHidden(false);
    } else {
      setPassWdHidden(true);
      return true;
    }
  };
  return (
    <>
      <FormWrapper>
        <div className="formSignInContent">
          <FormHeader value="Sign in"></FormHeader>
          <FormItem
            labelValue="Username"
            formRequired="required"
            inputType="text"
            inputId="username"
            placeholderValue="Enter a username..."
            isAutoComplete="off"
            handleOnInput={handleInputUserName}
            handleOnBlur={handleBlurUserName}
            inputValue={userName}
            textValidationValue={userNameValidation}
            textValidationId="validationUserName"
            textValidationColor={userNameColor}
            textValidationHidden={userNameHidden}
          />
          <FormItem
            labelValue="Password"
            formRequired="required"
            inputType={passwdType}
            inputId="passwd"
            placeholderValue="Enter your password..."
            isAutoComplete="off"
            handleOnInput={handleInputPasswd}
            handleOnBlur={handleBlurPasswd}
            inputValue={passwd}
            hiddenPwElement={
              passwdType === "password" ? (
                <i
                  onClick={handleTogglePw}
                  id="togglePassWd"
                  className="pw-toggle fa-solid fa-eye"
                ></i>
              ) : (
                <i
                  onClick={handleTogglePw}
                  id="togglePassWd"
                  className="pw-toggle fa-solid fa-eye-slash"
                ></i>
              )
            }
            textValidationValue={passWdValidation}
            textValidationId="validationPasswd"
            textValidationColor={passWdValidationColor}
            textValidationHidden={passWdHidden}
          />
          <Button handleOnClick={handleSubmit} value="Sign in" />
          <p className="signUpRcm">
            You don't have an account? Don't worry just{" "}
            <Link to="/register-form">Sign up</Link>
          </p>
        </div>
        <div className="formSignInImgWrapper">
          <img
            src="https://i.pinimg.com/564x/d8/50/e4/d850e454721951a083768dad60a88b3d.jpg"
            alt="img"
            className="formSignInImg"
          />
        </div>
      </FormWrapper>
      {loadingStatus && <Loader />}
      <Notification
        type="error"
        msg="Account doesn't exist!"
        handleOnClick={hideNotification}
      />
    </>
  );
}
