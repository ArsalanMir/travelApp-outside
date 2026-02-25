const fieldClass =
  'rounded-lg border border-slate-300 px-4 py-2 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200'

export function InputField({ className = '', ...props }) {
  return <input className={`${fieldClass} ${className}`.trim()} {...props} />
}

export function TextAreaField({ className = '', ...props }) {
  return <textarea className={`${fieldClass} min-h-32 ${className}`.trim()} {...props} />
}
