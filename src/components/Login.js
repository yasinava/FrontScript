import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Validate } from "./shared/Validate";
import { useDispatch ,useSelector} from "react-redux" ;
import {login} from "./redux/sign/signAction"
// style
import styles from "./styles/SignUp.module.css";
import logoFrontScript from "./assets/image/logofronscript.jpg";
import addUserLogo from "./assets/icon/add-user-svgrepo-com-Login.svg";
import logoSign from "./assets/icon/sign-in-svgrepo-com copy.svg";

const Login = () => {
  const userData = useSelector(state=> state.signState );
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [touch, setTouch] = useState({});

  useEffect(() => {
    setError(Validate(formData));
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

  const submitHandler =event=>{
    event.preventDefault();
    if(!Object.keys(error).length){
      dispatch(login(formData));
    }else{
        setTouch({
          email:true,
          password:true,
        })
    }

  }
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
        {userData.login ? (
          <div className={styles.success}>
            <h5 className="h3">Welcome</h5>
            <Link to="/*">
              <button
                className="btn btn-info w-75 mt-2"
              >
                Accept
              </button>
            </Link>
          </div>
        ) : (
          <form className={styles.formContainer} onSubmit={submitHandler}>
            <div className={styles.buttonLogin}>
              <Link to="/signUp">
                <button className="btn shadow-sm" type="button ">
                  ثبت نام
                  <img src={addUserLogo} alt="logo" />
                </button>
              </Link>
              <Link to="/login">
                <button name="login" className="btn" type="button">
                  ورود
                  <img src={logoSign} alt="logo" />
                </button>
              </Link>
            </div>
            <div>
              <h4 className="font-weight-bold text-muted mt-3 mb-5">ورود به فرانت اسکریپت</h4>
            </div>
            <div>
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
            </div>
            <div className={styles.submitButton}>
              <button type="submit" className="btn w-75">
                ورود
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;