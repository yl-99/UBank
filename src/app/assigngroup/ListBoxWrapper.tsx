import React from "react";

interface ListBoxWrapperProps {
  children: React.ReactNode;
  className?: string; 
}

export const ListBoxWrapper: React.FC<ListBoxWrapperProps> = ({ children, className }) => (
  <div className={`w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100 ${className}`}>
    {children}
  </div>
);
