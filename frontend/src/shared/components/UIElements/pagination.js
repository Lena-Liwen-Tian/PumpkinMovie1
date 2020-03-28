import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import './pagination.css';
const PaginationPage = props =>{
    let active = 1;
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pageNumbers.push(
       <Pagination.Item key={i} active={i === active} onClick={ ()=> props.paginate(i)}>    
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
         {paginationBasic};
        </span>
         
      );
};

 

export default PaginationPage;