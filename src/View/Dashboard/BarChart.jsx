import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const BarChart2 = () => {
  const data = [
    {
      name: 'Apr',
      sales: 330,
    },
    {
      name: 'May',
      sales: 250,
    },
    {
      name: 'Jun',
      sales: 110,
    },
    {
      name: 'Jul',
      sales: 300,
    },
    {
      name: 'Aug',
      sales: 490,
    },
    {
      name: 'Sep',
      sales: 350,
    },
    {
      name: 'Oct',
      sales: 270,
    },
    {
      name: 'Nov',
      sales: 130,
    },
    {
      name: 'Dec',
      sales: 425,
    },
  ];
  return (
    <>
      <div className="bar_chart_div">
      <ResponsiveContainer width="90%" height="50%" style={{ backgroundColor: "#060b28", borderRadius: "20px", marginTop: "20px" }}>
        <BarChart
          height={250}
          data={data}
          margin={{ top: 15, right: 30,  left: 20,  bottom: 20,  }}
          barSize={6}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <XAxis dataKey="name" /> */}
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="sales" fill="#dadbdf" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          {/* <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} /> */}
        </BarChart>
      </ResponsiveContainer>
      <p>Active Users</p>
      <h5><span>(+23)</span> than last week</h5>
      <div className="bar_chart_cards_wrapper">
        <div className="bar_chart_card">
          <div className="card_name_logo"><div style={{backgroundColor: '#0075ff',fontSize: '10px', padding: '3px 7px', borderRadius: '5px'}}><i class="fa-solid fa-wallet" style={{color: "#FFF"}}></i></div><span>Users</span></div>
          <div className="number_range"><span>32,984</span><div className="progress_bar"><div className="fill_div"></div></div></div>
        </div>
        <div className="bar_chart_card">
        <div className="card_name_logo"><div style={{backgroundColor: '#0075ff',fontSize: '10px', padding: '3px 7px', borderRadius: '5px'}}><i class="fa-solid fa-rocket" style={{color: "#FFF"}}></i></div><span>Clicks</span></div>
        <div className="number_range"><span>2,42M</span><div className="progress_bar"><div className="fill_div"></div></div></div>
        </div>
        <div className="bar_chart_card">
        <div className="card_name_logo"><div style={{backgroundColor: '#0075ff',fontSize: '10px', padding: '3px 7px', borderRadius: '5px'}}><i class="fa-solid fa-cart-shopping" style={{color: "#FFF"}}></i></div><span>Sales</span></div>
        <div className="number_range"><span>2,400$</span><div className="progress_bar"><div className="fill_div"></div></div></div>
        </div>
        <div className="bar_chart_card">
        <div className="card_name_logo"><div style={{backgroundColor: '#0075ff',fontSize: '10px', padding: '3px 7px', borderRadius: '5px'}}><i class="fa-solid fa-wrench" style={{color: "#FFF"}}></i></div><span>Items</span></div>
        <div className="number_range"><span>320</span><div className="progress_bar"><div className="fill_div"></div></div></div>
        </div>
      </div>
      </div>
    </>
  )
}

export default BarChart2
