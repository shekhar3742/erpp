import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom';

import 
 { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

 import "../Components/Dashboard.css";

 function Dashboard() {

    const data = [
        {
          name: '2018',
          products: 4000,
          oders: 2400,
        
        },
        {
          name: '2019',
          products: 3000,
          oders: 1398,
        
        },
        {
          name: '2020',
          products: 2000,
          oders: 9800,
          
        },
        {
          name: '2021',
          products: 2780,
          oders: 3908,
          
        },
        {
            name: '2022',
            products: 1890,
            oders: 4800,
           
          },
          {
            name: '2023',
            products: 2390,
            oders: 3800,
            
          },
          {
            name: '2024',
            products: 3490,
            oders: 4300,
           
          },
        ];


 return (
    <main className='main-container'>
        

        
        <div className='main-cards'>
        <Link to="/product" className='dashboardLink'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            </Link>
           
            <div className='card'>
            <Link to="/oders" className='oderLink'>
                <div className='card-inner'>
                    <h3>ODERS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
                </Link>
            </div>
           
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>

       

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="products" fill="#8884d8" />
                <Bar dataKey="oders" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="products" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="oders" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>



        </main>
  )
}

export default Dashboard