import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/Shop.module.css"
const Course = ({data}) => {
    return (
        <div className={styles.courseContainer}>
            <Link to={`/detail/${data.id}`}>
            <button className='btn btn-outline-info'>مشاهده دوره</button>            
            </Link>
            <div className={styles.details2}>
                <h5 className='font-weight-bold'>{data.title}</h5>
                <p className='font-weight-bold text-muted'>برای مشاهده به صفحه دوره مراجعه فرمایید.</p>
            </div>
            <div className={styles.logoCourse} style={{backgroundColor:data.bg}}>
                <img src={data.image} alt='pic'/>
            </div>
        </div>
    );
};

export default Course;