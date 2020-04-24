import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import './pagination.css';
const PaginationPage = props =>{
  
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
      let samepage = i === props.currentpage? "active" : "";
        pageNumbers.push(
       <Pagination.Item key={i} className={`${samepage}`} onClick={ ()=> props.paginate(i)}>    
           {i} 
        </Pagination.Item>);
    }
    const paginationBasic = (
        <div>
          <Pagination>{pageNumbers}</Pagination>
        </div>
      );
      
    return (
        <span>
         {paginationBasic}
        </span>
         
      );
};

 

export default PaginationPage;