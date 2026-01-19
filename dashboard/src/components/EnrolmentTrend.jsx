import { useEffect, useState } from "react"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts"

export default function EnrolmentTrend() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/data/enrolment_age_trend.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-[#d0d0d0] px-4 py-2 shadow-sm">
          <p className="text-[#2c3e50] font-semibold text-sm mb-2 border-b border-[#e0e0e0] pb-1">{payload[0].payload.month}</p>
          <div className="space-y-1">
            {payload.map((entry, index) => (
              <p key={index} className="text-[#666666] text-sm" style={{ color: entry.color }}>
                {entry.name}: <span className="font-semibold text-[#2c3e50]">{entry.value?.toLocaleString()}</span>
              </p>
            ))}
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis 
            dataKey="month" 
            tick={{ fontSize: 11, fill: '#666666' }}
            stroke="#cccccc"
          />
          <YAxis 
            tick={{ fontSize: 11, fill: '#666666' }}
            stroke="#cccccc"
            label={{ value: 'Enrolments', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#666666', fontSize: 11 } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }}
            iconType="line"
          />
          <Line 
            type="monotone" 
            dataKey="age_0_5" 
            stroke="#8b7355" 
            strokeWidth={2}
            name="Age 0-5"
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="age_5_17" 
            stroke="#2c3e50" 
            strokeWidth={2}
            name="Age 5-17"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="age_18_greater"
            stroke="#6b8e5a"
            strokeWidth={2}
            name="Age 18+"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}