interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="py-2 px-4 mx-2 bg-yellow-200 border-1 text-l rounded hover:bg-yellow-300"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
