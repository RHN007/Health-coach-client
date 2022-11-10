import React from 'react';


const ReviewCard = ({review,handleDelete,handleStatusUpdate}) => {
    
   const {_id,email, message, rating, customer} = review
   console.log(review)
 
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Reviewed By: {customer}</h2>
          <p>Email: {email}</p>
          <p>{message}</p>
          <p>Rating: {rating}</p>
        </div>

        <button onClick={() => handleDelete(_id)} className="btn btn-primary">
                            Delete Review
         </button>
        
      </div>
    );
};

export default ReviewCard;