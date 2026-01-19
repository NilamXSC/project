import { useState } from "react"

export default function CarouselCards({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden border border-[#e5e5e5] bg-[#fafafa]">
        <div 
          className="flex transition-transform duration-200 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-full">
              <div className="px-8 py-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[#2c3e50] text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-bold text-[#2c3e50] text-base mb-3 leading-tight">{item.title}</h3>
                    <p className="text-sm text-[#555555] leading-relaxed" style={{ lineHeight: '1.7' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-6 px-2">
        <button
          onClick={prev}
          className="px-5 py-2 text-sm text-[#2c3e50] border border-[#d5d5d5] bg-white hover:bg-[#fafafa] font-medium"
          aria-label="Previous"
        >
          ← Previous
        </button>
        <div className="flex gap-2.5">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentIndex ? 'bg-[#2c3e50]' : 'bg-[#d5d5d5]'
              }`}
              aria-label={`Go to capability ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="px-5 py-2 text-sm text-[#2c3e50] border border-[#d5d5d5] bg-white hover:bg-[#fafafa] font-medium"
          aria-label="Next"
        >
          Next →
        </button>
      </div>
    </div>
  )
}
