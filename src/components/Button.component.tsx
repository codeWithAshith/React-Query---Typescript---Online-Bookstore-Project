interface Props {
  children?: React.ReactNode;
  label: string;
  onClick: () => void;
  variant?: string; // default, outlined
  className?: string;
}

const ButtonComponent: React.FC<Props> = ({
  label,
  onClick,
  variant = "default",
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`border rounded-3xl p-2 px-6 ${
        variant === "default"
          ? "border-slate-50 bg-slate-900 text-white "
          : "border-slate-900 bg-slate-100 text-slate-950"
      } ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
