import React, { useEffect, useState } from 'react';
import CardServices from './CardServices';


const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('https://health-coach-server-rhn007.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {
                services.map(service => <CardServices key={service._id} service={service}></CardServices>)
            }
        </div>
    );
};

export default AllServices;