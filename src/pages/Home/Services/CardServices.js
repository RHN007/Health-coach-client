import React from 'react';
// import { Link } from 'react-router-dom';

const CardServices = ({service}) => {
    const {_id,img, price, title, description} = service
    return (
        <div>
            <div className="card w-96 bg-base-100 h-96 shadow-xl">
                <figure className='px-10 pt-10'
                ><img src={img}  alt="Shoes" /></figure>
                <div className="card-body p-5">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price ${price}</p>
                    <p>{description.length>100?description.slice(0,200):"see more"}</p>
                    {/* <div className="card-actions justify-end">
                       <Link to={`/checkout/${_id}`}>
                       <button className="btn btn-primary">Checkout</button>
                       </Link>
                    </div> */}
                </div>
            </div>
            
        </div>
    );
};

export default CardServices;