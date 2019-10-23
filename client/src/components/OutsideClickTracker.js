import React, {useEffect, useRef} from "react";

export const OutsideClickTracker = ({ onOutsideClick, active = true, children }) => {
  const containerRef = useRef(null);
  useEffect(
    () => {
      if (!active) return;

      const handleClick = (event) => {
        if (!containerRef.current.contains(event.target)) onOutsideClick();
      };

      document.addEventListener('click', handleClick);
      return () => document.removeEventListener('click', handleClick);
    },
    [active, onOutsideClick],
  );

  return <span ref={containerRef}>{children}</span>;
};
