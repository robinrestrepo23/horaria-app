// simple local replacement for the missing "@/lib/utils" module
const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

export const Button = ({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={cn(
        "bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition",
        className
      )}
    >
      {children}
    </button>
  );
};
