import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardServices from './CardServices';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('http://localhost:9000/services/limit')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
            <div className='text-center mb-6'>
                <p className="text-4xl font-bold text-primary">Services We Provide</p>
               
                <p className="py-6 text-stone-500 wrapper ">A one-on-one consulting service in which a certified health coach provides customized, <br /> tactical support to help you achieve your health goals.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                
                {
                    services.map(service => <CardServices key={service._id} service={service}></CardServices>)
                }
            </div>
            <div className='mt-5'>
               <p className='text-center'> <Link to={'/services'}><button className="btn btn-primary">See All</button></Link></p>
            </div>
        </div>
    );
};

export default Services;