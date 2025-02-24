interface ButtonProps {
  label: string;
}

export default function Button({ label }: ButtonProps) {
  return (
    <button className="py-2 px-4 bg-yellow-500 text-l rounded hover:bg-yellow-700">
      {label}
    </button>
  );
}
