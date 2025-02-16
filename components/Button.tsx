import Link from "next/link";
import { twMerge } from "tailwind-merge";
import type { UrlObject } from "url";

type Url = string | UrlObject;
interface IButtonProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
  href: Url;
}

export function Button({
  children,
  variant = "default",
  className,
  href,
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

  return (
    <Link href={href}>
      <button className={buttonClass}>{children}</button>
    </Link>
  );
}
