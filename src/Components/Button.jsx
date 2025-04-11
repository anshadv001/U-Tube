import { cva } from "class-variance-authority";
import { twMerge } from "./../../node_modules/tailwind-merge/src/lib/tw-merge";

const buttonStyles = cva(["transition-colors cursor-pointer"], {
  variants: {
    variant: {
      default: ["bg-neutral-200", "hover:bg-neutral-300"],
      ghost: ["hover:bg-gray-100"],
    },
    size: {
      default: ["p-2", "rounded"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "justify-center",
        "items-center",
        "p-2.5",
      ],
    },
    defaultVariants : {
        variant : "default",
        size : "default"
    }
  }
});

const Button = ({ variant, size, className, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    />
  );
};

export default Button;
