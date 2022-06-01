import { useEffect, useState } from "react";
import "./styles.css";
import FormHeader from "../../components/FormHeader/FormHeader";
import FormItem from "../../components/FormItem/FormItem";
import Button from "../../components/Button/Button";
import Loader from "../Loader/Loader";
import { useGlobalData } from "../../components/GlobalDataContext/GlobalDataContext";

export default function Form() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passwdType, setPasswdType] = useState("password");
  const [rePasswdType, setRePasswdType] = useState("password");
  const [passwd, setPasswd] = useState("");
  const [rePasswd, setRePasswd] = useState("");

  const [nameValidation, setNameValidation] = useState("*Valid name");
  const [nameValidationColor, setNameValidationColor] = useState("");
  const [nameHidden, setNameHidden] = useState(true);

  const [userNameValidation, setUserNameValidation] =
    useState("*Valid user name");
  const [userNameColor, setUserNameValidationColor] = useState("");
  const [userNameHidden, setUserNameHidden] = useState(true);

  const [emailValidation, setEmailValidation] = useState("*Valid email");
  const [emailValidationColor, setEmailValidationColor] = useState("");
  const [emailHidden, setEmailHidden] = useState(true);

  const [passWdValidation, setPassWdValidation] = useState("*Valid passWd");
  const [passWdValidationColor, setPassWdValidationColor] = useState("");
  const [passWdHidden, setPassWdHidden] = useState(true);

  const [rePassWdValidation, setRePassWdValidation] = useState(
    "Password confirmation match to password"
  );
  const [rePassWdValidationColor, setRePassWdValidationColor] = useState("");
  const [rePassWdHidden, setRePassWdHidden] = useState(true);

  const valueProvider = useGlobalData();
  const { loadingStatus, fetchUserData } = valueProvider;
  //   Click button
  const handleSubmit = () => {
    // let resultJson = "";
    handleBlurName();
    handleBlurUserName();
    handleBlurEmail();
    handleBlurPasswd();
    handleBlurRePasswd();

    if (
      handleBlurName() &&
      handleBlurUserName() &&
      handleBlurEmail() &&
      handleBlurPasswd() &&
      handleBlurRePasswd()
    ) {
      fetchUserData();
    }
  };

  //   Name
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleBlurName = () => {
    if (name === "") {
      setNameValidation("*Please enter name");
      setNameValidationColor("red");
      setNameHidden(false);
    } else {
      setNameHidden(true);
      return true;
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

  //   Email
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleBlurEmail = () => {
    if (email === "") {
      setEmailValidation("*Please enter your email");
      setEmailValidationColor("red");
      setEmailHidden(false);
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailValidation("*Invalid email. Please enter valid email");
      setEmailValidationColor("red");
      setEmailHidden(false);
    } else {
      setEmailHidden(true);
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

  const handleToggleRePw = (e) => {
    if (rePasswdType === "password") {
      setRePasswdType("text");
    } else {
      setRePasswdType("password");
    }
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

    if (passwd !== rePasswd) {
      setRePassWdValidation(
        "*Password confirmation is not match to password. Please check it again"
      );
      setRePassWdValidationColor("red");
      setRePassWdHidden(false);
    }
  };

  //   Password confirm
  const handleInputRePasswd = (e) => {
    setRePasswd(e.target.value);
  };
  const handleBlurRePasswd = () => {
    if (rePasswd === "") {
      setRePassWdValidation("*Please enter your password again");
      setRePassWdValidationColor("red");
      setRePassWdHidden(false);
    } else if (rePasswd !== passwd) {
      setRePassWdValidation(
        "*Password confirmation is not match to password. Please check it again"
      );
      setRePassWdValidationColor("red");
      setRePassWdHidden(false);
    } else {
      setRePassWdHidden(true);
      return true;
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="formWrapper"
      >
        <div className="formContent">
          <FormHeader value="Sign up"></FormHeader>
          <FormItem
            labelValue="Name"
            formRequired="required"
            inputType="text"
            inputId="name"
            placeholderValue="Enter your full name..."
            isAutoComplete="off"
            handleOnInput={handleInputName}
            handleOnBlur={handleBlurName}
            inputValue={name}
            textValidationValue={nameValidation}
            textValidationId="validationName"
            textValidationColor={nameValidationColor}
            textValidationHidden={nameHidden}
          />
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
            labelValue="Email address"
            formRequired="required"
            inputType="email"
            inputId="email"
            placeholderValue="Enter your email address..."
            isAutoComplete="off"
            handleOnInput={handleInputEmail}
            handleOnBlur={handleBlurEmail}
            inputValue={email}
            textValidationValue={emailValidation}
            textValidationId="validationEmail"
            textValidationColor={emailValidationColor}
            textValidationHidden={emailHidden}
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
          <FormItem
            labelValue="Confirm Password"
            formRequired="required"
            inputType={rePasswdType}
            inputId="cf_passwd"
            placeholderValue="Enter your password again..."
            isAutoComplete="off"
            handleOnInput={handleInputRePasswd}
            handleOnBlur={handleBlurRePasswd}
            inputValue={rePasswd}
            hiddenPwElement={
              rePasswdType === "password" ? (
                <i
                  onClick={handleToggleRePw}
                  id="toggleRePassWd"
                  className="pw-toggle fa-solid fa-eye"
                ></i>
              ) : (
                <i
                  onClick={handleToggleRePw}
                  id="toggleRePassWd"
                  className="pw-toggle fa-solid fa-eye-slash"
                ></i>
              )
            }
            textValidationValue={rePassWdValidation}
            textValidationId="validationRePasswd"
            textValidationColor={rePassWdValidationColor}
            textValidationHidden={rePassWdHidden}
          />
          <Button handleOnClick={handleSubmit} value="Sign up" />
          <p className="signInRcm">
            Already have an account? <a href="#">Sign in</a>
          </p>
        </div>
        <div className="formImgWrapper">
          <img
            src="https://static.vecteezy.com/system/resources/previews/003/809/771/original/woman-in-office-clothes-working-on-laptop-illustration-in-flat-cartoon-style-vector.jpg"
            alt="img"
            className="formImg"
          />
        </div>
      </form>
      {loadingStatus && <Loader />}
      {/* <Loader /> */}
    </>
  );
}
