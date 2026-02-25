function buildButtonClass(variant, className = '') {
  const baseClass =
    'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

  const variantClass =
    variant === 'secondary'
      ? 'border border-green-600 bg-white text-[#417e38] hover:bg-green-50 focus-visible:ring-green-600'
      : 'bg-[#417e38] text-white hover:bg-[#35692f] focus-visible:ring-green-600'

  return `${baseClass} ${variantClass} ${className}`.trim()
}

export function PrimaryButton({ className, type = 'button', ...props }) {
  return <button type={type} className={buildButtonClass('primary', className)} {...props} />
}

export function SecondaryButton({ className, type = 'button', ...props }) {
  return <button type={type} className={buildButtonClass('secondary', className)} {...props} />
}
