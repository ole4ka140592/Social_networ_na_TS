import React, {useState} from "react";
import classes from './Paginator.module.css'

type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}

export const Paginator = (props: PaginatorType) => {
    let portionSize = 10
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(props.totalUsersCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={classes.paginator}>
            {portionNumber > 1 && <button onClick={() =>
                setPortionNumber(portionNumber - 1)}>PREV</button>}


            <span>
                    {pages
                        .filter(f => f >= leftPortionPageNumber && f <= rightPortionPageNumber)
                        .map(m => <span className={
                            props.currentPage === m
                                ? classes.selectedPage
                                : ""}
                                        onClick={(e) => {
                                            props.onPageChanged(m)
                                        }} key={m}>
                            <span className={classes.margin}>{m}</span></span>)}
                </span>
            {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>PREV</button>}
        </div>
    )
}
