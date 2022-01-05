import React from "react";

const Pagination = (props)=>{
    const pageLinks =[];

    for(let n =1; n<= props.pages +1;n++){
        let active = props.currentPage ==n ? 'active' : '';
        pageLinks.push(<li className={`waves-effect ${active}`} key={n} onClick={()=>{props.nextPage(n)}}><a href="#">{n}</a></li>)
    }
    return(
        <div className="container">
            <div className="row">
                <ul className="pagination">
                    {props.currentPage > 1 ? <li className={`waves-effect`} onClick={()=>{props.nextPage(props.currentPage - 1)}}><a href="#">Prev</a></li> : ""}
                    {pageLinks}
                    {props.currentPage < props.pages+1 ? <li className={`waves-effect`} onClick={()=>{props.nextPage(props.currentPage + 1)}}><a href="#">Next</a></li> : ""}
                </ul>
            </div>
        </div>
    );

}
export default Pagination;