import React from "react";

type InputDefaultProps = {
  type?: "text" | "password" | "email" | "number";
};
const defaultProps: InputDefaultProps = {
  type: "text",
};

type InputProps = {
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & typeof defaultProps;

const InpuText = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-cyan-700 focus:border-cyan-700 font-regular`}
    />
  );
};

InpuText.defaultProps = defaultProps;

export default InpuText;
