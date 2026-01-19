import { useEffect, useState } from "react"

import GovTop from "./components/GovTop"
import KPIStatStrip from "./components/KPIStatStrip"
import GovLoader from "./components/GovLoader"
import Section from "./components/Section"
import UIDAIImpact from "./components/UIDAIImpact"
import Footer from "./components/Footer"
import Snackbar from "./components/Snackbar"
import Accordion from "./components/Accordion"

import ASPIBar from "./components/ASPIBar"
import ASPITable from "./components/ASPITable"
import EnrolmentTrend from "./components/EnrolmentTrend"
import AnomalyChart from "./components/AnomalyChart"

export default function App() {
  const [aspi, setAspi] = useState(null)
  const [snackbar, setSnackbar] = useState(null)
  const [viewMode, setViewMode] = useState("overview")

  useEffect(() => {
    fetch("/data/aspi_statewise.json")
      .then((res) => res.json())
      .then((data) => {
        setAspi(data)
        setSnackbar({ message: "Analytical data loaded successfully", type: "success" })
      })
      .catch((err) => {
        console.error(err)
        setSnackbar({ message: "Error loading analytical data", type: "error" })
      })
  }, [])

  const accordionItems = [
    {
      title: "Data Sources & Methodology",
      content: "This dashboard uses aggregated, anonymised Aadhaar enrolment and update datasets. All data processing follows Government of India data protection guidelines. No personal or identifiable information is accessed or displayed."
    },
    {
      title: "ASPI Calculation Framework",
      content: "The Aadhaar Service Pressure Index (ASPI) is a composite indicator calculated from enrolment volumes, update frequencies, and regional service capacity metrics. Values range from 0 to 1, with higher values indicating greater operational pressure."
    },
    {
      title: "Anomaly Detection Algorithm",
      content: "Anomalies are detected using statistical methods comparing monthly transaction volumes against historical trends. Spikes exceeding 2 standard deviations from the mean are flagged for administrative review."
    },
    {
      title: "Operational Use Cases",
      content: "This dashboard supports infrastructure planning, resource allocation, policy evaluation, and operational review. Data is updated monthly and reflects the most recent available aggregated statistics."
    }
  ]

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#2c3e50]">

      {/* Government identity anchor */}
      <GovTop />

      {/* Official statistics ribbon */}
      {aspi && <KPIStatStrip aspiData={aspi} />}

      <main
        id="main-content"
        className="max-w-7xl mx-auto px-8 py-14"
      >
        {/* Loader */}
        {!aspi && (
          <GovLoader label="Analysing Aadhaar enrolment and update datasets…" />
        )}

        {aspi && (
          <>
            {/* Radio buttons for view mode */}
            <div className="mb-10 bg-white border border-[#d5d5d5] px-8 py-5">
              <div className="flex items-center gap-8">
                <span className="text-sm font-semibold text-[#2c3e50] uppercase tracking-wide">View Mode:</span>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="radio"
                      name="viewMode"
                      value="overview"
                      checked={viewMode === "overview"}
                      onChange={(e) => setViewMode(e.target.value)}
                      className="w-4 h-4 text-[#2c3e50] border-2 border-[#999999] focus:ring-2 focus:ring-[#2c3e50] focus:ring-offset-1"
                    />
                    <span className="text-sm text-[#555555] font-medium group-hover:text-[#2c3e50]">{viewMode === "overview" ? <strong className="text-[#2c3e50]">Overview</strong> : "Overview"}</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="radio"
                      name="viewMode"
                      value="detailed"
                      checked={viewMode === "detailed"}
                      onChange={(e) => setViewMode(e.target.value)}
                      className="w-4 h-4 text-[#2c3e50] border-2 border-[#999999] focus:ring-2 focus:ring-[#2c3e50] focus:ring-offset-1"
                    />
                    <span className="text-sm text-[#555555] font-medium group-hover:text-[#2c3e50]">{viewMode === "detailed" ? <strong className="text-[#2c3e50]">Detailed Analysis</strong> : "Detailed Analysis"}</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              
              {/* Left Column - Full Height */}
              <div className="lg:col-span-2 space-y-8">
                {/* Institutional Impact */}
                <UIDAIImpact />

                {/* ASPI Analysis */}
                <Section
                  title="Aadhaar Service Pressure Index (ASPI)"
                  subtitle="Composite indicator reflecting enrolment and update load across states"
                >
                  <ASPIBar />
                </Section>

                {/* Ranking Table */}
                <Section
                  title="State-wise ASPI Ranking"
                  subtitle="Regions prioritised by relative Aadhaar service pressure"
                >
                  <ASPITable />
                </Section>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Lifecycle Trends */}
                <Section
                  title="Lifecycle-driven Enrolment Trends"
                  subtitle="Age-group based enrolment behaviour over time"
                >
                  <EnrolmentTrend />
                </Section>

                {/* Anomaly Detection */}
                <Section
                  title="Demand Anomalies & Early Warning Signals"
                  subtitle="Detection of abnormal activity spikes indicating operational stress"
                >
                  <AnomalyChart />
                </Section>
              </div>
            </div>

            {/* Accordion Section */}
            <div className="mb-12">
              <Section
                title="Additional Information & Methodology"
                subtitle="Technical details and operational guidelines"
              >
                <Accordion items={accordionItems} />
              </Section>
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Snackbar */}
      {snackbar && (
        <Snackbar
          message={snackbar.message}
          type={snackbar.type}
          onClose={() => setSnackbar(null)}
        />
      )}
    </div>
  )
}