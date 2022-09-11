import React from "react";
import { Link } from "react-router-dom";
// style
import styles from "./styles/Landing.module.css";
import banner from "./assets/image/banner.webp";
import btnlogo from "./assets/icon/caret-back-svgrepo-com.svg";
import btnLogo2 from "./assets/icon/caret-back-svgrepo-com copy.svg";
import arrow from "./assets/icon/arrow.svg";
// components
import { useDispatch, useSelector } from "react-redux";
import Cards from "./shared/Cards";
import AboutMe from "./shared/AboutMe";

const LandingPage = () => {
  const userData = useSelector((state) => state.signState);
  return (
    <div className={styles.landingContainer}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerImage}>
          <img src={banner} alt="banner" />
        </div>
        <div className={styles.textLanding}>
          <h1 className="h3-xs mb-4">آموزش برنامه نویسی با فرانت اسکریپت</h1>
          <h5 className="font-weight-bold text-muted">
            آموزش هدفمند، پروژه محور و جامع برنامه نویسی همراه با پشتیبانی دائمی
            جزو استاندارد های آموزشی بوتواستارت است که بدون شک باعث ورود شما به
            بازار کار خواهد شد
          </h5>
          <div className={styles.buttonsContainer}>
            <Link to="/opinion">
              <button type="button" className="btn mt-4 mr-2 ">
                نظرات دانشجویان
              </button>
            </Link>
            <Link to="/doreha">
              <button className="btn mt-4 mr-2 ">
                <img src={btnlogo} alt="btnLogo" />
                مشاهده دوره ها
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.arrowLogo}>
        <Link to="/doreha">
          <button className="btn  font-weight-bold">
            <img src={btnLogo2} alt="btnLogo" />
            بیشتر
          </button>
        </Link>
        <img src={arrow} alt="arrow" />
        <h1 className="font-weight-bold mr-3">جدیدترین ها</h1>
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <AboutMe />
      </div>
    </div>
  );
};

export default LandingPage;
