import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../redux/shop/shopAction";
// styles
import styles from "../styles/Card.module.css";
import btnLogo2 from "../assets/icon/caret-back-svgrepo-com copy.svg";
import clockLogo from "../assets/icon/clock-svgrepo-com.svg";
import loaderGif from "../assets/image/loader.gif";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  const login = useSelector((state) => state.signState);
  const state = useSelector((state) => state.shopState);
  const dispatch = useDispatch();
  const [buttonShow, setButtonShow] = useState(0);
  const buyHandler = () => {
    if (login.login) {
      dispatch(addItem(data));
      setButtonShow(1);
    } else {
      window.location.pathname = "/login";
    }
  };
  return (
    <div className={styles.cardContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.logoJS} style={{ backgroundColor: data.bg }}>
          <img src={data.image} alt="logoCard" />
        </div>
        <p className="font-weight-bold mt-4">{data.title}</p>
      </div>
      <div className={styles.body}>
        <div className={styles.timeBody}>
          <div> ساعت </div> {data.time}
          <img src={clockLogo} alt="clock" />
        </div>
        <div className={styles.priceBody}>
          <div>
            <span>{data.price === 0 ? "" : "تومان"}</span>{" "}
            {data.price === 0 ? "رایگان" : data.price.toLocaleString()}
          </div>
          <div className={styles.members}>
            <img src={loaderGif} alt="gif" />
          </div>
        </div>
      </div>
      <div>
        {!state.course.find((item) => item.id === data.id)?
        <div className={styles.buttonFooter}>
  <Link to={`/detail/${data.id}`}>
        <button className="btn  font-weight-bold ">
          <img src={btnLogo2} alt="btnLogo" />
          مشاهده دوره
        </button>
        </Link>

        {buttonShow === 0 &&
        !state.items.find((item) => item.id === data.id) ? (
          <button onClick={buyHandler} name="sign" className="btn shadow">
            ثبت نام
          </button>
        ) : (
          <Link to="/shop">
            <button name="button" className="btn ">
              ادامه سفارش
            </button>
          </Link>
        )}
        </div>:
        <div className={styles.detailsCard}>
          <Link to={`/detail/${data.id}`}>
    <button className="btn btn-outline-info">شما دانشجوی دوره هستید.مشاهده دوره؟</button>
          </Link>
        </div>
      }
      </div>
    </div>
  );
};

export default Card;
