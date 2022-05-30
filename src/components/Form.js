import { useEffect, useState } from "react";
import "./Form.css";

export default function Form() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passwdType, setPasswdType] = useState("password");
  const [rePasswdType, setRePasswdType] = useState("password");
  const [passwd, setPasswd] = useState("");
  const [rePasswd, setRePasswd] = useState("");

  //   Click button
  const handleSubmit = (e) => {};

  //   Name
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleBlurName = () => {
    const nameValidation = document.getElementById("validationName");
    if (name === "") {
      nameValidation.innerText = "*Please enter name";
      nameValidation.classList.add("opacity1", "red");
      nameValidation.classList.remove("green");
    } else {
      nameValidation.classList.remove("opacity1");
    }
  };

  //   UserName
  const handleInputUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleBlurUserName = () => {
    const userNameValidation = document.getElementById("validationUserName");
    if (userName === "") {
      userNameValidation.innerText = "*Please enter user name";
      userNameValidation.classList.add("opacity1", "red");
      userNameValidation.classList.remove("green");
    } else {
      userNameValidation.classList.remove("opacity1");
    }
  };

  //   Email
  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleBlurEmail = () => {
    const emailValidation = document.getElementById("validationEmail");
    if (email === "") {
      emailValidation.innerText = "*Please enter your email";
      emailValidation.classList.add("opacity1", "red");
      emailValidation.classList.remove("green");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      emailValidation.innerText = "*Invalid email. Please enter valid email.";
      emailValidation.classList.add("opacity1", "red");
      emailValidation.classList.remove("green");
    } else {
      emailValidation.classList.remove("opacity1");
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
    const passwdValidation = document.getElementById("validationPasswd");
    const rePasswdValidation = document.getElementById("validationRePasswd");

    if (passwd === "") {
      passwdValidation.innerText = "*Please enter your password";
      passwdValidation.classList.add("opacity1", "red");
      passwdValidation.classList.remove("green");
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(passwd)) {
      passwdValidation.innerText =
        "*Password contains minimum eight characters, at least one letter and one number";
      passwdValidation.classList.add("opacity1", "red");
      passwdValidation.classList.remove("green");
    } else {
      passwdValidation.classList.remove("opacity1");
    }

    if (passwd !== rePasswd) {
      rePasswdValidation.innerText =
        "*Password confirmation is not match to password. Please check it";
      rePasswdValidation.classList.add("opacity1", "red");
      rePasswdValidation.classList.remove("green");
    }
  };

  //   Password confirm
  const handleInputRePasswd = (e) => {
    setRePasswd(e.target.value);
  };
  const handleBlurRePasswd = () => {
    const rePasswdValidation = document.getElementById("validationRePasswd");
    if (rePasswd === "") {
      rePasswdValidation.innerText = "*Please enter your password again";
      rePasswdValidation.classList.add("opacity1", "red");
      rePasswdValidation.classList.remove("green");
    } else if (rePasswd !== passwd) {
      rePasswdValidation.innerText =
        "*Password confirmation is not match to password. Please check it";
      rePasswdValidation.classList.add("opacity1", "red");
      rePasswdValidation.classList.remove("green");
    } else {
      rePasswdValidation.classList.remove("opacity1");
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
          <h1 className="formHeading">Sign up</h1>
          <div className="formItem">
            <label className="formLabel" htmlFor="name">
              Name
            </label>
            <input
              required
              className="formInput"
              type="text"
              id="name"
              placeholder="Enter your full name..."
              autoComplete="off"
              onInput={handleInputName}
              value={name}
              onBlur={handleBlurName}
            />
            <p id="validationName" className="validationText">
              Validation
            </p>
          </div>
          <div className="formItem">
            <label className="formLabel" htmlFor="username">
              Username
            </label>
            <input
              required
              className="formInput"
              type="text"
              id="username"
              placeholder="Enter a username..."
              autoComplete="off"
              onInput={handleInputUserName}
              value={userName}
              onBlur={handleBlurUserName}
            />
            <p id="validationUserName" className="validationText">
              Validation
            </p>
          </div>
          <div className="formItem">
            <label className="formLabel" htmlFor="email">
              Email address
            </label>
            <input
              required
              className="formInput"
              type="email"
              id="email"
              placeholder="Enter your email address..."
              autoComplete="off"
              onInput={handleInputEmail}
              value={email}
              onBlur={handleBlurEmail}
            />
            <p id="validationEmail" className="validationText">
              Validation
            </p>
          </div>
          <div className="formItem">
            <label className="formLabel" htmlFor="passwd">
              Password
            </label>
            <div className="formPassWd">
              <input
                required
                className="formInput"
                type={passwdType}
                id="passwd"
                placeholder="Enter your password..."
                autoComplete="off"
                onInput={handleInputPasswd}
                value={passwd}
                onBlur={handleBlurPasswd}
              />
              {passwdType === "password" ? (
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
              )}
            </div>
            <p id="validationPasswd" className="validationText">
              Validation
            </p>
          </div>
          <div className="formItem">
            <label className="formLabel" htmlFor="cf_passwd">
              Confirm Password
            </label>
            <div className="formPassWd">
              <input
                required
                className="formInput"
                type={rePasswdType}
                id="cf_passwd"
                placeholder="Enter your password again..."
                autoComplete="off"
                onInput={handleInputRePasswd}
                value={rePasswd}
                onBlur={handleBlurRePasswd}
              />
              {rePasswdType === "password" ? (
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
              )}
            </div>
            <p id="validationRePasswd" className="validationText">
              Validation
            </p>
          </div>
          <button onClick={handleSubmit} type="submit" className="formBtn">
            Sign up
          </button>
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
    </>
  );
}
