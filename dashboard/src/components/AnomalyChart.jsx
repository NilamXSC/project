import { useEffect, useState } from "react"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Scatter,
} from "recharts"

export default function AnomalyChart() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/data/monthly_tx.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error)
  }, [])

  const anomalies = data.filter((d) => d.anomaly === true)

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white border border-[#d0d0d0] px-4 py-2 shadow-sm">
          <p className="text-[#2c3e50] font-semibold text-sm mb-2 border-b border-[#e0e0e0] pb-1">{data.month}</p>
          <p className="text-[#666666] text-sm mb-1">
            Total Transactions: <span className="font-semibold text-[#2c3e50]">{data.total_tx?.toLocaleString()}</span>
          </p>
          {data.anomaly && (
            <p className="text-[#8b4a4a] font-semibold mt-2 pt-2 border-t border-[#e0e0e0]">⚠ Anomaly Detected</p>
          )}
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
            label={{ value: 'Transactions', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#666666', fontSize: 11 } }}
          />
          <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="total_tx"
              stroke="#8b7355"
              strokeWidth={2}
              dot={false}
              name="Monthly Transactions"
            />
            {anomalies.length > 0 && (
              <Scatter
                data={anomalies}
                dataKey="total_tx"
                fill="#8b4a4a"
                shape="circle"
                r={5}
              />
            )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}