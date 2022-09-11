import React from "react";
import { Link } from "react-router-dom";
// style
import instagram from "./assets/icon/instagram-svgrepo-com (1).svg";
import github from "./assets/icon/github-svgrepo-com (1).svg";
import whatsApp from "./assets/icon/whatsapp-svgrepo-com (1).svg";
import logoFrontScript from "./assets/image/logofronscript.jpg";

import styles from "./styles/Footer.module.css";
const Footer = () => {
  return (
    <div>
      <div className={styles.footerContainer}>
        <div className={styles.footerOption}>
          <h3 className="mt-5">بخش های سایت</h3>
          <Link to="/doreha">دوره ها</Link>
          <Link to="/about">درباره ما</Link>
          <Link to="/opinion">نظرات دانشجویان</Link>
          <div className={styles.footerConnect}>
            <a href="https://instagram.com/yasinava/?__a=1">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="https://wa.me/989303711924">
              <img src={whatsApp} alt="whatsApp" />
            </a>
            <a href="https://github.com/yasinava">
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div className={styles.footerText}>
          <div className={styles.footerLogo}>
            <div>
              <h4 className="font-weight-bold mt-3 mr-3">
                آکادامی فرانت اسکریپت
              </h4>
              <span className="font-weight-bold mt-3 mr-3 text-muted">
                آموزش برنامه نویسی | پروژه محور | پشتیبانی دائمی | جامع
              </span>
            </div>
            <img src={logoFrontScript} alt="logo" />
          </div>
          <div className="w-100 mr-4 my-4 text-muted"  >
          هدف بوتواستارت ارائه بهترین دوره های آموزش برنامه نویسی به دانشجویان برای ورود به بازار کار است و برای رسیدن به این هدف یک سری استانداردها تعیین شده و به صورت ستخگیرانه روی دوره ها اعمال میشود. این استاندار ها شامل تدریس سلیس و روان برای انتقال مفاهیم در کنار کامل و جامع بودن دوره ها است به صورتی که با دیدن یک دوره به سطح مناسب و حرفه ای برسید. همچنین دوره ها پروژه محور هستند تا کاربرد مفاهیمی که یاد میگیرید را درک کنید و اگر احیانا ابهامی پیش آید میتوانید از پشتیبانی دائمی‌ بوتواستارت استفاده کنید و سوال هایتان را بپرسید. و در آخر به یکی از مهم ترین ویژگی دوره ها اشاره میکنم و آن هم آپدیت و بروز بودن آن ها مطالق آخرین تکنولوژی ها میباشد.
          </div>
        </div>
      </div>
      <h5 className="btn font-weight-bold text-muted">.: FrontScript :.</h5>
    </div>
  );
};

export default Footer;
