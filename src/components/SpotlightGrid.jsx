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

  return (
    <div
      ref={gridRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-grid ${className}`}
    >
      {children}
    </div>
  );
}