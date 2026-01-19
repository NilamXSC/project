export default function Section({ title, subtitle, children }) {
  return (
    <section className="bg-white border border-[#e5e7eb] mb-12">
      
      {/* Header */}
      <div className="px-10 pt-8 pb-6 border-b border-[#d1d5db]">
        <h2 className="text-2xl font-semibold text-[#0f172a] mb-3 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-[#475569] max-w-4xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {/* Content */}
      <div className="px-10 py-8">
        {children}
      </div>

    </section>
  )
}