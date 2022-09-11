import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ShopCard from "./shared/ShopCard";
// styles
import styles from "./styles/Shop.module.css";
import logoEmpty from "./assets/image/empty-basket.webp";
import { Link } from "react-router-dom";
import { addToCourse, check, clear } from "./redux/shop/shopAction";
const Shop = () => {
  const state = useSelector((state) => state.shopState);
  const dispatch = useDispatch();
  const buy =()=>{
    dispatch(addToCourse())
    dispatch(check())
  }
  return (
    <div>
      {!state.checkOut ? (
        <div>
          {state.items.length ? (
            <div className={styles.shopContainer}>
              <div className={styles.priceContainer}>
                <h2>هزینه دوره ها</h2>
                <div className={styles.prices}>
                  <div>
                    <span className="text-muted">
                      تومان{state.price.toLocaleString()}
                    </span>
                    <span>:جمع کل</span>
                  </div>
                  <button
                    onClick={buy}
                    className="btn btn-info w-75"
                  >
                    تکمیل سفارش
                  </button>
                </div>
              </div>
              <div className={styles.listContainer}>
                <h2>لیست دوره ها</h2>
                {state.items.map((item) => (
                  <ShopCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.emptyContainer}>
              <h2 className="font-weight-bold text-info mt-4">
                متاسفانه سبد خرید شما خالی است!
              </h2>
              <img src={logoEmpty} alt="pic" />
              <Link to="/doreha">
                <button className="btn btn-info font-weight-bold">
                  ثبت نام و شروع برنامه نویسی
                </button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <div className={styles.checkout}>
          <h2 className="font-weight-bold">خرید شما با موفقیت انجام شد</h2>
          <Link to="/*">
            <button  className="btn btn-info w-75 mt-4 font-weight-bold" onClick={()=>dispatch(clear())}>
              تایید
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Shop;
