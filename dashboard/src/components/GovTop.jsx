export default function GovTop() {
  return (
    <header className="w-full bg-[#2c3e50] text-white">
      
      {/* Top utility bar - Accessibility and utilities */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-xs">
          <div className="flex items-center gap-3 text-white/85">
            <span>Government of India</span>
            <span className="text-white/40">|</span>
            <span>Ministry of Electronics & Information Technology</span>
          </div>
          <div className="flex items-center gap-3 text-white/85">
            <a href="#main-content" className="hover:text-white hover:underline">
              Skip to main content
            </a>
            <span className="text-white/40">|</span>
            <span title="Accessibility" className="cursor-default">♿</span>
            <span title="Screen Reader" className="cursor-default">🔊</span>
            <span title="Language" className="cursor-default">🌐</span>
            {/* Tricolour flag indicator */}
            <div className="flex gap-[2px] ml-2 items-center">
              <div className="w-4 h-[2px] bg-[#d4a574]" />
              <div className="w-4 h-[2px] bg-white" />
              <div className="w-4 h-[2px] bg-[#6b8e5a]" />
            </div>
          </div>
        </div>
      </div>

      {/* Main header - National identity anchor */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center gap-6">
          
          {/* Ashoka Emblem with Satyameva Jayate - Smaller size */}
          <div className="flex flex-col items-center flex-shrink-0">
            <img
              src="/assets/ashoka.svg"
              alt="State Emblem of India"
              className="w-12 h-12 mb-1 opacity-90"
            />
            <p className="text-[9px] text-white/80 font-medium tracking-wide">
              सत्यमेव जयते
            </p>
          </div>

          {/* Portal identity */}
          <div className="flex-1">
            <h1 className="text-2xl font-semibold tracking-tight leading-tight mb-1 text-white">
              UIDAI Analytics Dashboard
            </h1>
            <p className="text-sm text-white/75">
              Internal Analytical Portal
            </p>
          </div>

        </div>
      </div>
    </header>
  )
}