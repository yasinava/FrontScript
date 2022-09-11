import React, { useState } from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {logout} from "./redux/sign/signAction"
// styles
import styles from "./styles/UserAccount.module.css";
import dorehaLogo from "./assets/icon/two-books-svgrepo-com.svg";
import userProfile from "./assets/icon/user-profile-svgrepo-com (1).svg";
import Course from "./shared/Course";
const UserAccount = () => {
  const userData = useSelector((state) => state.signState);
  const myCourse = useSelector((state) => state.shopState);
  const state = useSelector(state=>state.shopState);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  return (
    <div className={styles.accountContainer}>
      <div className={styles.information}>
        {!show ?
        <div className={styles.welcomeInfo}>
          <h3 className="font-weight-bold text-muted">فرانت  اسکریپت</h3>
          <p className="font-weight-bold">میخوای برنامه نویس شی؟ جای درستی اومدی ❤️</p>
          <p className="font-weight-bold text-danger">در قسمت <span className="font-weight-bold text-primary">(دوره های من)</span> میتوانید تمام دوره هایی که شرکت کردید و نحوه دسترسی به آن را ببنید.</p>
        </div>:
        <div className={styles.courseList}>
          {myCourse.course.map(item => <Course key={item.id} data={item} /> )}
        </div>
        }
      </div>
      <div className={styles.userContainer}>
        <div className={styles.dataContainer}>
          <img src={userProfile} alt="userProfile" />
          <h5 className="w-100 mt-3 text-dark font-weight-bold">
            {userData.online ? userData.online[0].name : "loading..."}
          </h5>
          <span className="w-100 text-muted font-weight-bold">
            {userData.online ? userData.online[0].email : "loading..."}
          </span>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={()=>setShow(false)} className="btn btn-outline-light text-dark w-100 font-weight-bold pr-4 mt-3">
            حساب کاربری{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
            </svg>
          </button>
          <button onClick={()=>setShow(true)} className="btn btn-outline-light text-dark w-100 font-weight-bold pr-4 mt-2">
            دوره های من <img src={dorehaLogo} alt="books" />
          </button>
          <Link to="/*" >
          <button onClick={()=>dispatch(logout())} className="btn btn-outline-light w-100 font-weight-bold text-danger pr-4 mt-2">
            خروج{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill="#ff0000"
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
              />
              <path
                fill="#ff0000"
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserAccount;
