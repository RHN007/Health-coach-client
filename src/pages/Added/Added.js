import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Added = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthContext)
    const {_id, title, price} = service
    
    const handleAddServices = event => {
        event.preventDefault()
        const form = event.target; 
        const name = form.name.value
        const email = user?.email || 'Unregistered'
        const phone = form.phone.value; 
        const message = form.message.value; 

        const addedService = {
            service: _id, 
            serviceName : title, 
            price, 
            customer: name, 
            email, 
            phone, 
            message
    }
    fetch(`https://health-coach-server-rhn007.vercel.app/added`,{
        method:'POST', 
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(addedService)
    })
    .then(res => res.json())
    .then(data => {if(data.acknowledged){
        alert('Service Added SuccessFully')
        form.reset()
    }})
    .catch(err => console.log(err))
    }

    
    return (
        <div className='border-4 solid  p-10 rounded-lg bg-secondary'>
            <form onSubmit={handleAddServices}>
                <h2 className="text-2xl text-center text-white font-bold">You are about to Take: {title}</h2>
                <h4 className="text-3xl text-center font-bold text-primary">Service Fee ${price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8 '>
                    <input  name="name" type="text" placeholder="Service Name" defaultValue={title} className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full " required />
                    <input name="email" type="text" placeholder="Type Email" defaultValue={user?.email} className="input input-bordered w-full " readOnly />
                   
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-5" placeholder="Your Message" required></textarea>
                <input className='btn btn-primary' type="submit" value="Book Your Service" />
            </form>
        </div>
    );
};

export default Added;