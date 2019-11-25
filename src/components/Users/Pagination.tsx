import React, { useState } from 'react'
import s from "./Users.module.css";
import {useDispatch} from "react-redux";
import {getUsers, setCurrentPage} from '../../redux/users-reducer';


interface IProps {
    count: number
    currentPage: number
    totalUserCount: number
    portionSize?: number,
    onPageChanged: (p: number) => void
}

const Pagination = ({count, currentPage, totalUserCount, portionSize=10, onPageChanged}: IProps) => {

    const dispatch = useDispatch();

    //number of portion
    const [currentPortion, setCurrentPortion] = useState(1);

    //page_count
    let pageCount = Math.ceil(totalUserCount / count);


    //create array of pageCount
    let pageCountArr: Array<number>  = [];
    for(let i = 1; i <= pageCount; i++) {
        pageCountArr.push(i)
    }

    //portion count
    let portionCount = Math.ceil(pageCount / portionSize);
    //leftPortionNumber
    let leftPortionNumber = (currentPortion - 1) * portionSize + 1;
    //rightPortionNumber
    let rightPortionNumber = currentPortion * portionSize;


    return (
        <div className={s.pagination}>
            {(currentPortion !== 1) && <button onClick={() => setCurrentPortion(currentPortion - 1)}>prev</button>}
            {pageCountArr.filter(p => p >= leftPortionNumber && p <= rightPortionNumber).map(p => (
                <div onClick={() => onPageChanged(p)} className={currentPage === p ? s.activePage : s.page}>{p}</div>)
            )}
            {(currentPortion < portionCount) && <button onClick={() => setCurrentPortion(currentPortion + 1)}>next</button>}
        </div>
    )
};


export default Pagination