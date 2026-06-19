interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <input
      className="form-control"
      placeholder="Search..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    />
  );
}