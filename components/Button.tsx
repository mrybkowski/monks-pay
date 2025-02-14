import { twMerge } from "tailwind-merge";

interface IButtonProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
}

export function Button({
  children,
  variant = "default",
  className,
}: IButtonProps) {
  const variantClasses = {
    default:
      "rounded-full py-3 px-6 font-semibold h-min w-min transition-all duration-300 ease-in-out",
    primary:
      "bg-generalColors-primary text-generalColors-white hover:bg-generalColors-dark border border-transparent hover:border-generalColors-white",
    secondary:
      "bg-generalColors-secondary text-generalColors-black bg-generalColors-secondary/90",
    outline:
      "border border-generalColors-dark hover:bg-generalColors-dark hover:text-generalColors-white",
  };

  const buttonClass = twMerge(
    variantClasses[variant],
    variantClasses.default,
    className
  );

  return <button className={buttonClass}>{children}</button>;
}
