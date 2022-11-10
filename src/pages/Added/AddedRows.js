import React, { useEffect, useState } from 'react';

const AddedRows = ({order,handleDelete,handleStatusUpdate}) => {
    const {_id, serviceName, phone, price, service,status } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://health-coach-server-rhn007.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])


    return (
   
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline btn-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-24 h-24">
                                {orderService?.img &&
                                    <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{serviceName}</div>
                            <div className="text-sm opacity-50">{phone}</div>
                        </div>
                    </div>
                </td>
                <td>
                    
                    <br />
                    <span className="badge badge-primary font-bold text-xl">Price: {price}</span>
                </td>
                
                <th>
                    <button onClick={()=> handleStatusUpdate(_id)} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
                </th>
            </tr>
       
    );
};

export default AddedRows;