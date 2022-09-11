import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// components
import { Validate } from "./shared/Validate";
import { login, sign } from "./redux/sign/signAction";
// style
import styles from "./styles/SignUp.module.css";
import logoFrontScript from "./assets/image/logofronscript.jpg";
import addUserLogo from "./assets/icon/add-user-svgrepo-com.svg";
import logoSign from "./assets/icon/sign-in-svgrepo-com.svg";

const SignUp = () => {
  const userData = useSelector((state) => state.signState);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setError(Validate(formData, "SignUp"));
  }, [formData, touch]);

  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };
  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!Object.keys(error).length) {
 dispatch(sign(formData));
    } else {
      setTouch({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
      });
    }
  };
  return (
    <div className={styles.SignUpContainer}>
      <div className={styles.logoSign}>
        <img
          className="w-50 mt-3 mb-5"
          src={logoFrontScript}
          alt="logoFrontScript"
        />
      </div>
      <div className={styles.bgContainer}>
        {userData.sign ? (
          <div className={styles.success}>
            <h3 className="font-weight-bold">Welcome</h3>
            <Link to="/*">
              <button
                className="btn btn-info w-75 mt-5 font-weight-bold"
                onClick={() => dispatch(login(formData))}
              >
                Accept
              </button>
            </Link>
          </div>
        ) : (
          <form className={styles.formContainer} onSubmit={submitHandler}>
            <div className={styles.buttonSign}>
              <Link to="/signUp">
                <button className="btn" type="button ">
                  ثبت نام
                  <img src={addUserLogo} alt="logo" />
                </button>
              </Link>
              <Link to="/login">
                <button name="login" className="btn shadow-sm" type="button">
                  ورود
                  <img src={logoSign} alt="logo" />
                </button>
              </Link>
            </div>
            <div>
              <h4 className="font-weight-bold text-muted mt-3 mb-5">عضویت در فرانت اسکریپت</h4>
            </div>
            <div>
              <div className={styles.formField}>
                <input
                  className={
                    error.name && touch.name ? styles.redBorder : styles.border
                  }
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={changeHandler}
                  placeholder="Name"
                  onFocus={focusHandler}
                />
                <div>
                  {error.name && touch.name && <span>{error.name}</span>}
                </div>
              </div>
              <div className={styles.formField}>
                <input
                  className={
                    error.email && touch.email
                      ? styles.redBorder
                      : styles.border
                  }
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={changeHandler}
                  placeholder="Email"
                  onFocus={focusHandler}
                />
                <div>
                  {error.email && touch.email && <span>{error.email}</span>}
                </div>
              </div>
              <div className={styles.formField}>
                <input
                  className={
                    error.password && touch.password
                      ? styles.redBorder
                      : styles.border
                  }
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={changeHandler}
                  placeholder="Password"
                  onFocus={focusHandler}
                />
                <div>
                  {error.password && touch.password && (
                    <span>{error.password}</span>
                  )}
                </div>
              </div>
              <div className={styles.formField}>
                <input
                  className={
                    error.confirmPassword && touch.confirmPassword
                      ? styles.redBorder
                      : styles.border
                  }
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={changeHandler}
                  placeholder="ConfirmPassword"
                  onFocus={focusHandler}
                />
                <div>
                  {error.confirmPassword && touch.confirmPassword && (
                    <span>{error.confirmPassword}</span>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.submitButton}>
              <button type="submit" className="btn w-75">
                ثبت نام
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
