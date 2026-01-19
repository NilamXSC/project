import { useEffect, useState } from "react"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts"

export default function ASPIBar() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/data/aspi_statewise.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-[#d0d0d0] px-4 py-2 shadow-sm">
          <p className="text-[#2c3e50] font-semibold text-sm mb-1">{payload[0].payload.state}</p>
          <p className="text-[#666666] text-sm">ASPI Indicator: <span className="font-semibold text-[#2c3e50]">{payload[0].value.toFixed(3)}</span></p>
        </div>
      )
    }
    return null
  }

  return (
    <div style={{ width: "100%", height: 420 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 120 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="state" 
            angle={-45}
            textAnchor="end"
            height={120}
            tick={{ fontSize: 10, fill: '#666666' }}
            interval={0}
            stroke="#cccccc"
          />
          <YAxis 
            tick={{ fontSize: 11, fill: '#666666' }}
            domain={[0, 'dataMax']}
            stroke="#cccccc"
            label={{ value: 'ASPI', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#666666', fontSize: 11 } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="ASPI" fill="#8b7355" radius={[0, 0, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}