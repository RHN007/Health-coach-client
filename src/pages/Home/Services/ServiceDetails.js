import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const ServiceDetails = () => {
    const service = useLoaderData()
   
    const {_id,  img, price, title, description } = service
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>Price : ${price}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/reviews/${_id}`}>
                       <button className="btn btn-primary">Add A review</button>
                       </Link>
                    </div>
                </div>
                <div>
                  
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;