export default function GovLoader({ label = "Processing Aadhaar analytics…" }) {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      
      <div className="w-12 h-12 border-3 border-slate-300 border-t-slate-600 rounded-full animate-spin" />

      <p className="mt-6 text-sm text-slate-700 font-medium">
        {label}
      </p>

      <p className="mt-2 text-xs text-slate-500">
        Please wait while analytical data is prepared
      </p>
    </div>
  )
}