interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="space-y-1">
      {label && <label className="block text-sm font-medium">{label}</label>}
      <input
        {...props}
        className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>
  );
};
