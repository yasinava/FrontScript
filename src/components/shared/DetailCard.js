import React from "react";
import { useParams } from "react-router-dom";
import { DataCards } from "./DataCard";
import styles from "../styles/Card.module.css"
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/shop/shopAction";
const DetailCard = () => {
    const card = useParams();
    const data = DataCards.filter((item) => item.id === Number(card.id));
    const state = useSelector(state=>state.shopState);
    const login = useSelector(state=>state.signState);
    const { title, description, image, price,bg } = data[0];
    const dispatch =useDispatch()
    const addList = ()=>{
        if(login.login){
            dispatch(addItem(data[0]))
        }else{
            window.location.pathname="/login"
        }
    }
  return (
    <div className={styles.detailContainer}>
      <div>
        <div className={styles.logoDetails} style={{ backgroundColor: bg }}>
          <img src={image} alt="pic" />
        </div>
        <h5 className="mb-5 mt-4 font-weight-bold">{title}</h5>
        <p className="text-muted mb-5">{description}</p>
      </div>
      <div className={styles.buttonPrice}>
        <span className="font-weight-bold text-dark">{price.toLocaleString()}</span>
        {!state.course.find((item) => item.id === data[0].id)?
        <div>
        {!state.items.find((item) => item.id === data[0].id) ? (
        <button onClick={addList} className="btn btn-success font-weight-bold">
            ثبت نام در دوره{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </button>
              ) : (
                <Link to="/shop">
                  <button name="button" className="btn btn-outline-success px-4">
                    ادامه سفارش
                  </button>
                </Link>
              )}
        </div>
        :
        <button name="btn" className="btn">شما دانشجوی این دوره هستید</button>}
      </div>
    </div>
  );
};

export default DetailCard;
