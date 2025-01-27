import React from 'react'
import { AreaChart,XAxis,YAxis,CartesianGrid,Tooltip,Area, ResponsiveContainer,ReferenceLine } from 'recharts'
const AreaChart5 = () => {
  const data = [
    {
      "name": "Jan",
      "Mobile Apps": 500,
      "Websites": 200,
      "amt": 400
    },
    {
      "name": "Feb",
      "Mobile Apps": 300,
      "Websites": 230,
      "amt": 600
    },
    {
      "name": "Mar",
      "Mobile Apps": 300,
      "Websites": 300,
      "amt": 500
    },
    {
      "name": "Apr",
      "Mobile Apps": 220,
      "Websites": 350,
      "amt": 400
    },
    {
      "name": "May",
      "Mobile Apps": 500,
      "Websites": 370,
      "amt": 300
    },
    {
      "name": "Jun",
      "Mobile Apps": 250,
      "Websites": 420,
      "amt": 200
    },
    {
      "name": "July",
      "Mobile Apps": 300,
      "Websites": 550,
      "amt": 100
    },
    {
      "name": "Aug",
      "Mobile Apps": 230,
      "Websites": 350,
      "amt": 200
    },
    {
      "name": "Sep",
      "Mobile Apps": 300,
      "Websites": 400,
      "amt": 200
    },
    {
      "name": "Oct",
      "Mobile Apps": 350,
      "Websites": 500,
      "amt": 200
    },
    {
      "name": "Nov",
      "Mobile Apps": 250,
      "Websites": 330,
      "amt": 200
    },
    {
      "name": "Dec",
      "Mobile Apps": 400,
      "Websites": 550,
      "amt": 200
    },
  ]
  
  return (
    <>
      <div className='area_chart_div'>
        <p>Sales Overview</p>
        <h5><span>+5% more</span> in 2021</h5>
        <div className='area_chart'>
        <ResponsiveContainer width='100%'>
        <AreaChart  height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#0077ff" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#0077ff" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#2083ad" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#2083ad" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  {/* <CartesianGrid strokeDasharray="3 3" /> */}
  <Tooltip />
  <Area type="monotone" dataKey="Mobile Apps" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="Websites" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
        </ResponsiveContainer>

        </div>
      </div>
    </>
  )
}

export default AreaChart5
