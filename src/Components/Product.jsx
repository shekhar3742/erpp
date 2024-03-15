import React, { useEffect, useState } from 'react'
import { Productdb } from './Productdb';



function Product() {

    const [data, setData] = useState([]);
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const [id, setId] = useState(0)
    const [isupdate, setIsupdate] = useState("false")

    useEffect(()=>{
        setData(Productdb)
    },[]);

    const handleEdit = (id) =>{
        const dt = data.filter(item => item.id === id);
        if(dt !== undefined){
            setIsupdate(true);
            setId(id);
            setName(dt[0].name);
            setCategory(dt[0].category);
            setStock(dt[0].stock);
            setPrice(dt[0].price);
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
    
        if(category === '')
        error += 'require';

        if(stock <= 0)
        error += 'require';

        if(price <= 0)
        error += 'require';

        if(error === ''){

            e.preventDefault();
            const dt = [...data];
            const newObject = {
                id: Productdb.length + 1,
                name: name,
                category: category,
                stock: stock,
                price: price,

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
        dt[index].category = category;
        dt[index].stock = stock;
        dt[index].price = price;

        setData(dt);
        handleClear();
    }

    const handleClear = () =>{
        setId(0);
        setName('');
        setCategory('');
        setStock('');
        setPrice('');
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
        <label> Category
        <input type='text' onChange={(e)=> setCategory(e.target.value)} value={category}/>

        </label>
    </div>
    <div>
        <label> Stock
        <input type='text' onChange={(e)=> setStock(e.target.value)} value={stock}/>

        </label>
    </div>
    <div>
        <label> Price
        <input type='text' onChange={(e)=> setPrice(e.target.value)} value={price}/>

        </label>
    </div>

    <div>
    {
        !isupdate ?

    <button className='btn btn-success ' onClick={(e)=> handleSave(e)}>Save</button>
    :
    <button className='btn btn-success me-2' onClick={()=> handleUpdate()}>Update</button>
    }
      <button className='btn btn-warning ms-2' onClick={()=> handleClear()}>Clear</button>
    </div>

    </div>




     <table className="table table-hover">
        <thead>
            <tr>
                <td>Sr.no</td>
                <td>ID</td>
                <td>Name</td>
                <td>Category</td>
                <td>Stock</td>
                <td>Price</td>
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
                        <td>{item.category}</td>
                        <td>{item.stock}</td>
                        <td>{item.price}</td>
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
    </div>
  )
}

export default Product
