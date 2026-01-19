export default function Footer() {
  return (
    <footer className="bg-[#f8f8f8] border-t border-[#d0d0d0] mt-12">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="text-center space-y-3">
          <p className="text-xs text-[#666666] leading-relaxed font-normal">
            This dashboard uses aggregated, anonymised Aadhaar data for analytical
            and policy-support purposes only. No personal data is processed.
          </p>
          <div className="flex items-center justify-center gap-2 text-xs text-[#666666]">
            <span>Government of India</span>
            <span className="text-[#999999]">•</span>
            <span>Ministry of Electronics & Information Technology</span>
            <span className="text-[#999999]">•</span>
            <span>Unique Identification Authority of India (UIDAI)</span>
          </div>
          <p className="text-xs text-[#999999] mt-4">
            © {new Date().getFullYear()} Government of India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}