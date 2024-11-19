import { ReactNode } from "react";

type ButtonDefaultProps = {
  color: "primary" | "secondary";
  variant: "outline" | "contained";
  disabled: boolean;
  fullWidth: boolean;
};

const defaultProps: ButtonDefaultProps = {
  color: "primary",
  variant: "contained",
  disabled: false,
  fullWidth: false,
};

type Props = {
  children: ReactNode;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: () => void;
  fullWidth?: boolean;
  btnType?: "submit" | "reset" | "button";
} & typeof defaultProps;

const Button = ({
  children,
  variant,
  disabled,
  color,
  endIcon,
  startIcon,
  onClick,
  fullWidth,
  btnType,
}: Props) => {
  let buttonClassName =
    "px-4 py-2 border-2 transition-all transform active:opacity-70 relative overflow-hidden flex items-center justify-center font-bold";

  if (color === "primary") {
    buttonClassName +=
      variant === "outline"
        ? " text-white border-black"
        : " bg-black text-white border-black";
  } else if (color === "secondary") {
    buttonClassName +=
      variant === "outline"
        ? " text-indigo-600 border-indigo-600"
        : " bg-indigo-600 text-white border-indigo-600";
  }

  if (disabled) {
    buttonClassName += " cursor-not-allowed opacity-40";
  }

  if (fullWidth) {
    buttonClassName += " w-full";
  }

  buttonClassName +=
    " hover:scale-105 hover:shadow-lg active:scale-95 transition-transform duration-200 ease-in-out";

  return (
    <button
      type={btnType}
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}

      {!disabled && (
        <div className="absolute top-0 left-0 w-full h-full shimmer-animation" />
      )}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
