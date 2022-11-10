import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Review = () => {
    const review = useLoaderData()
    const {_id,title, price} = review
    console.log(review)

    const {user} = useContext(AuthContext)

    const handleReview = event => {
        event.preventDefault()
        const form = event.target; 
        const name = form.name.value
        const email = user?.email || 'Unregistered'
        const rating = form.ratings.value; 
        const message = form.message.value; 
       
        const addReviews = {
            service: _id, 
            serviceName : title, 
            rating, 
            customer: name, 
            email, 
            price,
            message,
         
    }

    fetch('http://localhost:9000/reviews', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json',
            // authorization: `Bearer ${localStorage.getItem('genius-token')}`
                
            },
            body: JSON.stringify(addReviews)
        })
        .then(res => res.json())
        .then(data => {if(data.acknowledged){
            alert(`Review places successfully`)
            form.reset()
        }})
        .catch(err => console.error(err))




    }

    return (
        <div className='border-4 solid  p-10 rounded-lg bg-secondary'>
        <form onSubmit={handleReview}>
            <h2 className="text-2xl text-center text-white font-bold">Thanks For Review: {title}</h2>
            <h4 className="text-3xl text-center font-bold text-primary">Service Fee ${price}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 '>
                <input  name="name" type="text" placeholder="Service Name" defaultValue={user?.displayName} className="input input-bordered w-full" />
                <input name="ratings" type="text" placeholder="Give Rating Out of 5" className="input input-bordered w-full " required />
                <input name="email" type="text" placeholder="Type Email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
               
            </div>
            <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-5" placeholder="Your Message" required></textarea>
            <input className='btn btn-primary' type="submit" value="Give Your Review" />
        </form>
    </div>
    );
};

export default Review;