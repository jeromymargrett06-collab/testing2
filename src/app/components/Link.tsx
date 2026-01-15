import { ReactNode } from "react";

interface LinkProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function Link({ href, onClick, children, className = "" }: LinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a href={href || "#"} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
