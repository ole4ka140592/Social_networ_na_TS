import React from "react";
import classes from './Paginator.module.css'

type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}

export const Paginator = (props: PaginatorType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
                <span>{pages.map(m => <span className={props.currentPage === m ? classes.selectedPage : ""}
                                            onClick={(e) => {
                                                props.onPageChanged(m)
                                            }} key={m}>{m}</span>)}
                </span>

        </div>
    )
}
