import { useState } from "react"

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-0 border border-[#e5e5e5]">
      {items.map((item, index) => (
        <div key={index} className="border-b border-[#e5e5e5] last:border-b-0">
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#fafafa] transition-colors group"
          >
            <span className="font-semibold text-[#2c3e50] text-sm group-hover:text-[#1a1a1a]">{item.title}</span>
            <span className="text-[#666666] text-xl font-light leading-none w-6 text-center">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6 border-t border-[#e5e5e5] bg-[#fafafa]">
              <p className="text-sm text-[#555555] leading-relaxed pt-5" style={{ lineHeight: '1.75' }}>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
