import React from 'react'
import s from "./Users.module.css";


const Pagination = () => {
    return (
        <div className={s.pagination}>
            <button>prev</button>
            <div>1 2 3 4 5 6 7 8 9</div>
            <button>next</button>
        </div>
    )
};


export default Pagination