import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const CardServices = ({service}) => {
    const {_id,img, price, title, description} = service
    return (
        <div>
            <div className="card card-compact h-full w-96  bg-base-100  shadow-xl">
                <figure className='px-10 pt-10'
                ><img src={img}  alt="Shoes" /></figure>
                <div className="card-body p-5">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-primary font-semibold'>Price ${price}</p>
                    {description.length > 200 ? <p>{description.slice(0, 250) + '......'} <Link to={`/services/${_id}`}><span className='font-bold text-sky-700'>Read More</span></Link> </p> :
                        <p>{description}</p>}
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