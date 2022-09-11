import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// style
import styles from "./styles/Navbar.module.css";
import FrontScriptLogo from "./assets/image/bedontitle0.png";
import logoSign from "./assets/icon/sign-in-svgrepo-com.svg";
import logoShop from "./assets/icon/shop.svg";
import logoPerson from "./assets/icon/person.svg";
import hamburgerMenu from "./assets/icon/list.svg"
import doreLogo from "./assets/icon/two-books-svgrepo-com.svg"
import homeLogo from "./assets/icon/house-fill.svg"
import aboutLogo from "./assets/icon/person-circle.svg"
import opinionLogo from "./assets/icon/two-speech-bubbles-svgrepo-com.svg"



const Navbar = () => {
  const userData = useSelector((state) => state.signState);
  const state = useSelector(state => state.shopState)
  const [click,setClick] = useState(0);
  return (
    <div className={styles.NavbarContainer}>
      <div className={styles.sign}>
        {!userData.login ? (
          <Link to="/login">
            <button className="btn px-4 ">
              ورود
              <img src={logoSign} alt="sign" />
            </button>
          </Link>
        ) : (
          <Link to="/userAccount">
            <button className="btn px-3 ">
              <img src={logoPerson} alt="sign" />
            </button>
          </Link>
        )}
        <Link to="/shop">
          <button className="btn px-3">
            {state.items.length>0?
            <span name="badge" className="badge badge-danger">{state.items.length}</span>:
            ""
            }
            <img src={logoShop} alt="logoShop" />
          </button>
        </Link>
      </div>
      <div className={styles.hamburgerMenu}>
            <button onClick={()=>setClick(1)} className="btn btn-outline-light">
               <img src={hamburgerMenu} alt="menu" />
            </button>
            <div className={click===1 ?styles.listMenu:styles.disListMenu}>
                <div className={styles.buttonClose}>
                <button onClick={()=>setClick(0)} type="button" className="close">
                  <span className="btn  py-0">&times;</span>
                </button>
                </div>
                <div className={styles.buttonMenuLogo}>
                  <Link to="/*" >
                  <button className="btn w-100">صفحه اصلی <img src={homeLogo} alt="home" /></button>
                  </Link>
                  <Link to="/doreha" >
                  <button className="btn w-100">دوره ها <img src={doreLogo} alt="dore" /></button>
                  </Link>
                  <Link to="/opinion" >
                  <button className="btn w-100">نظرات دانشجویان <img src={opinionLogo} alt="opinion" /></button>
                  </Link>
                  <Link to="/about" >
                  <button className="btn w-100">درباره ما <img src={aboutLogo} alt="about" /></button>
                  </Link>
                </div>
            </div>
      </div>
      <div className={styles.menu}>
        <Link to="/about">
          <div>درباره ما</div>
        </Link>
        <Link to="/opinion">
          <div>نظرات دانشجویان</div>
        </Link>
        <Link to="/doreha">
          <div>دوره ها</div>
        </Link>
        <Link to="/*">
          <div>صفحه اصلی</div>
        </Link>
      </div>
      <div className={styles.logo}>
        <img src={FrontScriptLogo} alt="FrontScript" />
      </div>
    </div>
  );
};

export default Navbar;
