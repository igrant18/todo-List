import React from "react";
import classNames from "classnames";

const range = (start, end) => {
    return [...Array(end).keys()].map(el => el + start)
}

const PaginationItem = ({page, currentPage, onPageChange}) => {
    const liClasses = classNames({
        'page-item': true,
        'active': page == currentPage
    });
    return (
        <li key={page} className={liClasses} value={page}>
            <input type='button' className="page-link" value={page} onClick={onPageChange}/>
        </li>
    )
}

const Pagination = ({ currentPage, pageSize, totalCount, onPageChange }) => {
    const pagesCount = Math.ceil(totalCount / pageSize)
    const pages = range(1, pagesCount);
    let maxdisabled = false;
    let minisabled = false;
    
    if(currentPage === pagesCount) {
        maxdisabled = true
    }
    if(currentPage === 1) {
        minisabled = true
    }
    return (
        <ul className="pagination">
            <li key={-9999} className='page-item' >
                <input type='button' className="page-link" value={'<'} onClick={onPageChange} disabled={minisabled}/>
            </li>
            {
                pages.map(page => (
                    <PaginationItem page={page} key={page} currentPage={currentPage} onPageChange={onPageChange}/>
                ))
            }
            <li key={9999} className='page-item'>
                <input type='button' className="page-link" value={'>'} onClick={onPageChange} disabled={maxdisabled} />
            </li>
        </ul>
    )
}

export default Pagination;