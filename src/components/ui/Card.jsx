import { cn } from '../../utils/cn';

/**
 * @typedef {Object} CardProps
 * @property {string} [className] - Additional CSS classes
 * @property {React.ReactNode} children - Card content
 */

/**
 * Card component for consistent card layouts
 * @param {CardProps} props
 */
export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * @typedef {Object} CardHeaderProps
 * @property {string} [className] - Additional CSS classes
 * @property {React.ReactNode} children - Card header content
 */

/**
 * Card header component
 * @param {CardHeaderProps} props
 */
export function CardHeader({ className, children, ...props }) {
  return (
    <div className={cn('mb-4', className)} {...props}>
      {children}
    </div>
  );
}

/**
 * @typedef {Object} CardContentProps
 * @property {string} [className] - Additional CSS classes
 * @property {React.ReactNode} children - Card content
 */

/**
 * Card content component
 * @param {CardContentProps} props
 */
export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  );
}