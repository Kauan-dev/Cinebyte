type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer rounded-sm border border-neutral-50 bg-black px-3 py-2 text-sm font-semibold text-neutral-50"
    >
      {label}
    </button>
  );
}
