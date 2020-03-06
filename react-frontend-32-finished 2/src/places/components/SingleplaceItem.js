import React from 'react';
import Button from '../../shared/components/FormElements/Button';


const SingleplaceItem = props => {

return(
    <div className="card mb-3" style={{maxwidth: "540px"}}>
        <div className="row no-gutters">
          <div className="col-md-4">  
          <img src= {props.image} className="card-img" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{props.name}</h1>
              <p className="card-text">{props.description}</p>
           
              <Button className="b">Browse Movies Here</Button>
            </div>
          </div>
        </div>
        
      </div>

     )
};
export default SingleplaceItem;