import React, { useEffect, useState } from 'react'
import { Odersdb } from './Odersdb';




function Oders() {

    const [data, setData] = useState([]);
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [status, setStatus] = useState('')
   
    const [id, setId] = useState(0)
    const [isupdate, setIsupdate] = useState("false")

    useEffect(()=>{
        setData(Odersdb)
    },[]);

    const handleEdit = (id) =>{
        const dt = data.filter(item => item.id === id);
        if(dt !== undefined){
            setIsupdate(true);
            setId(id);
            setName(dt[0].name);
            setDate(dt[0].date);
            setStatus(dt[0].status);
            // setPrice(dt[0].price);
        }
    }

    const handleDelete = (id) =>{
        if(id > 0){
            const dt = data.filter(item => item.id !== id);
            setData(dt);
        }
    }

    const handleSave = (e) =>{
        let error = '';

        if(name === '')
        error += 'require';
    
        if(date === '')
        error += 'require';

        if(status === '')
        error += 'require';

       

        if(error === ''){

            e.preventDefault();
            const dt = [...data];
            const newObject = {
                id: Odersdb.length + 1,
                name: name,
                date: date,
                status: status,
                // price: price,

            }
            dt.push(newObject);
            setData(dt);
        }
        

    }

    const handleUpdate = () =>{
        const index = data.map((item)=>{
            return item.id

        }).indexOf(id);

        const dt =[...data];
        dt[index].name = name;
        dt[index].date = date;
        dt[index].status = status;
        // dt[index].price = price;

        setData(dt);
        handleClear();
    }

    const handleClear = () =>{
        setId(0);
        setName('');
        setDate('');
        setStatus('');
        // setPrice('');
        setIsupdate(false);
        
    }

  return (
    <div>

    <div style={{display: 'flex', justifyContent:'center', marginTop:"20px", marginBottom:"10px"}}>
    <div>
        <label> Name
        <input type='text' onChange={(e)=> setName(e.target.value)} value={name}/>

        </label>
    </div>
    <div>
        <label> Date
        <input type='text' onChange={(e)=> setDate(e.target.value)} value={date}/>

        </label>
    </div>
    <div>
        <label> Status
        <input type='text' onChange={(e)=> setStatus(e.target.value)} value={status}/>
       

        </label>
    </div>
    

    <div>
    {
        !isupdate ?

    <button className='btn btn-success' onClick={(e)=> handleSave(e)}>Save</button>
    :
    <button className='btn btn-success me-2' onClick={()=> handleUpdate()}>Update</button>
    }
      <button className='btn btn-warning ms-2' onClick={()=> handleClear()}>Clear</button>
    </div>

    </div>



    {/* <div className='container'> */}
     <table className="table table-hover " >
        <thead>
            <tr>
                <td>Sr.no</td>
                <td>ID</td>
                <td>Name</td>
                <td>Date</td>
                <td>Status</td>
                {/* <td>Price</td> */}
                <td>Action</td>
            </tr>
        </thead>
        <tbody className="table-group-divider">
            {
                data.map((item, index)=>{
                    return(
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.status}</td>
                        {/* <td>{item.price}</td> */}
                        <td>
                            <button className='btn btn-primary' onClick={()=> handleEdit(item.id)}>Edit</button>&nbsp;
                            <button className='btn btn-danger' onClick={()=> handleDelete(item.id)}>Delete</button>
                        </td>
                       

                        </tr>
                    )
                })
            }
        </tbody>
     </table>
     {/* </div> */}
    </div>
  )
}

export default Oders
