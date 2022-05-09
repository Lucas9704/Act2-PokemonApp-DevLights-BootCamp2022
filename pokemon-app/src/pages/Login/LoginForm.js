import { useState } from "react";
import "./LoginForm.css";
import showPass from "./icons/show.png";
import hidePass from "./icons/hide.png";
import { login } from "../../services/Auth";

/**
 * Datos validos para login de Student:
 *      - Email: "canteroslukss@gmail.com"
 *      - password: "Abc1234"
 */

export function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  function handleClick() {
    if (email === "" || password === "") {
      setError("Email and password are required");
    } else if (email === login[0].userEmail && password === login[0].password) {
      window.localStorage.setItem("isLogged", true);
      setError("");
      onSuccess();
      return ;
    }

    window.localStorage.setItem("isLogged", false);
    setError("invalid credentials");
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onShowPasswordClick() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="LoginForm">
      {error.length > 0 ? (
        <div className="LoginFormError">
          {error}
        </div>
      ) : null}
      <div className="LoginFormContainer">
        <label htmlFor="email" className="LoginFormInputLabel">Email</label>
        <input name="email" id="email" type="email" className="LoginFormInput" value={email} onChange={onEmailChange} />
        <label htmlFor="password" className="LoginFormInputLabel">Password</label>
        <div className="PasswordContainer">
          <input name="password" id="password" type={showPassword ? "text" : "password"} className="LoginFormInput" value={password} onChange={onPasswordChange} />
            <button className="buttonContainer" type="button" value={showPassword} onClick={onShowPasswordClick} >
              <img src={showPassword ? showPass : hidePass} alt="showPass" className="imgIcon" />
            </button>
        </div>
        <button className="LoginFormButton" onClick={handleClick}>Sing in</button>
      </div>
    </div>
  )
}
