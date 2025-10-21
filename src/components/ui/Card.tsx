import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title?: string;
}

export const Card = ({ children, title }: CardProps) => (
  <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
    {title && <h3 className="text-xl font-semibold text-gray-800">{title}</h3>}
    {children}
  </div>
);
