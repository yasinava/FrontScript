import React, { useState } from "react";
// styles
import styles from "../styles/AboutMe.module.css";
import photoLogo from "../assets/image/bedontitle0.png"
const AboutMe = () => {
  const [click, setClick] = useState(1);
  const next = () => {
    if (click < 3) {
      setClick(click + 1);
    } else {
      setClick(1);
    }
  };
  const back = () => {
    if (click > 1) {
      setClick(click - 1);
    } else {
      setClick(3);
    }
  };
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.box}>
        <div className={styles.boxCard}>
          <div className={click === 1 ? styles.animation : styles.itemBox1}>
            <h3>چرا برنامه نویس شدم؟</h3>
            <p>
              سلام یاسین عوض زاده هستم دانشجوی مهندسی کامپیوتر .پس از معرفی یکی
              از دوستان وتحقیق درمورد برنامه نویسی علاقه خاصی نسبت به آن پیدا
              کردم وشروع کردم به آموزش
            </p>
          </div>
          <div className={click === 2 ? styles.animation : styles.itemBox2}>
            <h3>چرا برنامه نویسی رو انتخاب کردم؟</h3>
            <p>
              برای من برنامه نویسی خیلی ایده‌آل بود، شرایط کاری یکنواختی نداشت،
              باید با تکنولوژی های جدید خودمو آپدیت کنم، امکان کار به صورت ریموت
              (دورکاری) رو داره و برای منی‌ که شهرستان هستم عالی بود. و در نهایت
              واقعا از خلق کردن یک محصول و دیدن نتیجه نهایی لذت میبرم.
            </p>
          </div>
          <div className={click === 3 ? styles.animation : styles.itemBox3}>
            <h3>از برنامه نویسی راضی هستم؟</h3>
            <p>
              هر کاری سختی و چالش های خودشو داره و برنامه نویسی هم از این قاعده
              مستثنی‌نیست اما در کل از انتخابم واقعا راضیم. برنامه نویسی من رو
              وارد مسیری کرد که خیلی از محدودیت هارو برداشت و تونستم کار های
              مفیدی انجام بدم، انجام دادن کار های مفید که به نفع مردم هست همیشه
              بهترین حس رو به آدم میده.
            </p>
          </div>
          <div className={styles.buttons}>
            <button className="btn btn-outline-light mr-3" onClick={back}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-left-fill"
                viewBox="0 0 16 16"
              >
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
            </button>
            <button className="btn btn-outline-light mr-3" onClick={next}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.photo}>
        <img src={photoLogo} alt="me" />
      </div>
    </div>
  );
};

export default AboutMe;
