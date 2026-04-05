import { cn } from '../../utils/cn';

/**
 * @typedef {Object} ButtonProps
 * @property {'primary' | 'secondary' | 'outline' | 'ghost'} [variant] - Button variant
 * @property {'sm' | 'md' | 'lg'} [size] - Button size
 * @property {boolean} [disabled] - Whether button is disabled
 * @property {string} [className] - Additional CSS classes
 * @property {React.ReactNode} children - Button content
 * @property {React.ButtonHTMLAttributes} rest - Other button props
 */

/**
 * Button component with consistent styling and variants
 * @param {ButtonProps} props
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  className,
  children,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg hover:shadow-emerald-500/25',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700',
    outline: 'border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}