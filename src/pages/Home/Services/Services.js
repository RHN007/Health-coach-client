import React, { useEffect, useState } from 'react';
import CardServices from './CardServices';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('https://health-coach-server-rhn007.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center mb-6'>
                <p className="text-4xl font-bold text-primary">Services We Provide</p>
               
                <p className="py-6 text-stone-500 wrapper ">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                
                {
                    services.map(service => <CardServices key={service._id} service={service}></CardServices>)
                }
            </div>
        </div>
    );
};

export default Services;