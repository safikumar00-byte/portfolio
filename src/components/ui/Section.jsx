import { cn } from '../../utils/cn';

/**
 * @typedef {Object} SectionProps
 * @property {string} [id] - Section ID for navigation
 * @property {string} [className] - Additional CSS classes
 * @property {React.ReactNode} children - Section content
 */

/**
 * Section component for consistent page sections
 * @param {SectionProps} props
 */
export function Section({ id, className, children, ...props }) {
  return (
    <section
      id={id}
      className={cn('py-20 lg:py-32', className)}
      {...props}
    >
      {children}
    </section>
  );
}

/**
 * @typedef {Object} SectionHeaderProps
 * @property {string} [title] - Section title
 * @property {string} [subtitle] - Section subtitle
 * @property {string} [description] - Section description
 * @property {string} [className] - Additional CSS classes
 * @property {React.ReactNode} [children] - Additional content
 */

/**
 * Section header component for consistent section introductions
 * @param {SectionHeaderProps} props
 */
export function SectionHeader({
  title,
  subtitle,
  description,
  className,
  children,
  ...props
}) {
  return (
    <div className={cn('mb-16 text-center', className)} {...props}>
      {subtitle && (
        <p className="mb-4 text-sm font-medium uppercase tracking-wider text-emerald-400">
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
          {title}
        </h2>
      )}
      {description && (
        <p className="mx-auto max-w-2xl text-lg text-gray-300">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}