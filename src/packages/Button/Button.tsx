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
    "px-3 py-2 border-2 active:scale-95 transition transform active:opacity-50 flex items-center font-regular";

  if (color === "primary") {
    buttonClassName +=
      variant === "outline"
        ? " text-cyan-700 border-cyan-700"
        : " bg-cyan-700 text-white border-cyan-700";
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
    buttonClassName += " w-full justify-center";
  }

  return (
    <button
      type={btnType}
      onClick={onClick}
      disabled={disabled}
      className={buttonClassName}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>} {children}{" "}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
