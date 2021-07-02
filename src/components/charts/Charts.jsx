import React from 'react'
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts'
import "./charts.css"

export default function Charts({ title, data, grid, dataKey, legend }) {

  return (
    <div className="chart">
      <h3 className="chartTitle"> {title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data} >
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray />}
          <YAxis dataKey={dataKey} stroke="#5550bd" />
          {legend && <Legend />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
