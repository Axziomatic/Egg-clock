interface ButtonProps {
  label: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button className="py-2 px-4 mx-2 bg-yellow-500 text-l rounded hover:bg-yellow-700">
      {props.label}
    </button>
  );
}
