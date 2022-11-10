import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


import ReviewCard from './ReviewCard';

const AddReview = () => {
    const {user, logOut} = useContext(AuthContext)
    console.log(user)
    const [reviews , setReviews] = useState([])

    useEffect(() => {
        fetch(`https://health-coach-server-rhn007.vercel.app/reviews`)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order')
     if(proceed) {
    fetch(`https://health-coach-server-rhn007.vercel.app/reviews/${id}`, {
        method: 'DELETE',
        // headers: {
        //         authorization: `Bearer ${localStorage.getItem('genius-token')}`
        //     }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.deletedCount > 0){
            alert('Deleted Successfully'); 
            const remaining = reviews.filter(odr => odr._id !== id)
            setReviews(remaining)
        }
    })
}
}

const handleStatusUpdate = id => {
    fetch(`https://health-coach-server-rhn007.vercel.app/added/${id}`, {
        method: 'PATCH', 
        headers: {
            'content-type' : 'application/json',
            // authorization: `Bearer ${localStorage.getItem('genius-token')}`
        }, 
        body: JSON.stringify({status: 'Approved'})
    })
    .then(res => res.json())
    .then(data => {console.log(data)
            if(data.modifiedCount>0){
                    // const remaining = orders.filter(odr => odr._id !== id)
                    const approving = reviews.find(odr => odr._id ===id)
                    approving.status = 'Approved'
                    const newOrders = [ approving , ...approving]
                    setReviews(newOrders)

            }}
    )
}





    return (
        <div className='grid grid-cols-1 md:grid-cols-3 p-6'>
            {
                reviews.map(review =><ReviewCard key={review._id} review ={review}
                    handleDelete= {handleDelete}
                    handleStatusUpdate={handleStatusUpdate}
                
                ></ReviewCard> )
            }
         
        </div>
    );
};

export default AddReview;