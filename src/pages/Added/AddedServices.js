import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import AddedRows from './AddedRows';

const AddedServices = () => {
    const {user, logOut} = useContext(AuthContext)
    const [orders, setOrders] = useState([])


    useEffect(()=> {
        fetch(`https://health-coach-server-rhn007.vercel.app/added?email=${user?.email}`)
        .then(res => {res.json()})
            .then(data => {setOrders(data)
                console.log('received', data)})

    },[user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order')
     if(proceed) {
    fetch(`https://health-coach-server-rhn007.vercel.app/added/${id}`, {
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
            const remaining = orders.filter(odr => odr._id !== id)
            setOrders(remaining)
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
                    const approving = orders.find(odr => odr._id ===id)
                    approving.status = 'Approved'
                    const newOrders = [ approving , ...approving]
                    setOrders(newOrders)

            }}
    )
}







    return (
<div>
            <h2 className="text-2xl text-primary text-center">You have {orders.length} Services Added</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                       {
                        orders?.map( order => <AddedRows
                            key={order._id} 
                            order={order}
                            handleDelete= {handleDelete}
                            handleStatusUpdate= {handleStatusUpdate}
                            
                            
                            ></AddedRows>)
                       }
                
                        
                       
                  
                    </tbody>
                    {/* <!-- foot --> */}
                  

                </table>
            </div>
        </div>
    );
};

export default AddedServices;