import { useRef } from 'react';

export function SpotlightGrid({ children, className }) {
  const gridRef = useRef(null);

  const handleMouseMove = (e) => {
    const grid = gridRef.current;
    if (!grid) return;
    const rect = grid.getBoundingClientRect();
    grid.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    grid.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const grid = gridRef.current;
      if (!grid) return;
      const rect = grid.getBoundingClientRect();
      grid.style.setProperty('--mouse-x', `${rect.width / 2}px`);
      grid.style.setProperty('--mouse-y', `${rect.height / 2}px`);
    }
  };

  return (
    <div
      ref={gridRef}
      onMouseMove={handleMouseMove}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      className={`spotlight-grid ${className}`}
    >
      {children}
    </div>
  );
}
