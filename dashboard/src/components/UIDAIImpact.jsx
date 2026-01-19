import CarouselCards from "./CarouselCards"

export default function UIDAIImpact() {
  const impactItems = [
    {
      title: "Service Pressure Identification",
      description: "Identifies states and districts under high Aadhaar service pressure, enabling proactive infrastructure and manpower planning."
    },
    {
      title: "Lifecycle Pattern Analysis",
      description: "Highlights lifecycle-driven enrolment patterns (children to adults), supporting targeted outreach and update scheduling."
    },
    {
      title: "Anomaly Detection",
      description: "Detects abnormal spikes in enrolment or update activity that may indicate migration, policy rollouts, or service bottlenecks."
    },
    {
      title: "Operational Framework",
      description: "Provides a reproducible, data-backed framework for operational review without accessing any personal or identifiable Aadhaar data."
    }
  ]

  return (
    <section className="bg-white border border-[#d5d5d5]">
      <div className="px-8 pt-6 pb-4 border-b-2 border-[#2c3e50] bg-white">
        <h2 className="text-xl font-bold text-[#2c3e50] leading-tight mb-2 tracking-tight">
          Analytical Purpose & Institutional Impact
        </h2>
        <p className="text-sm text-[#666666] leading-relaxed font-normal max-w-4xl">
          This dashboard supports operational decision-making and policy planning through aggregated, anonymised data analysis
        </p>
      </div>
      <div className="px-8 py-8 bg-white">
        <div className="max-w-4xl">
          <p className="text-sm text-[#2c3e50] leading-relaxed mb-8 font-normal" style={{ lineHeight: '1.75' }}>
            This analytical portal provides administrators and policy planners with evidence-based insights derived from aggregated Aadhaar enrolment and update datasets. The following capabilities support institutional decision-making:
          </p>
          <CarouselCards items={impactItems} />
        </div>
      </div>
    </section>
  )
}