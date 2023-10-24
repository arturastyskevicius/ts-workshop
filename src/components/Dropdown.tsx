import { SortOption } from "../types/types";

type DropdownProps = {
  options: SortOption[];
  selectedValue: string;
  onSelectedChange: React.Dispatch<React.SetStateAction<string>>;
};

const Dropdown = ({
  options,
  selectedValue,
  onSelectedChange,
}: DropdownProps) => {
  const renderOption = ({ value, title }: SortOption) => {
    return (
      <option key={value} value={value}>
        {title}
      </option>
    );
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectedChange(event.target.value);
  };

  return (
    <div style={{ marginTop: 10 }}>
      <select value={selectedValue} onChange={handleChange}>
        {options.map(renderOption)}
      </select>
    </div>
  );
};

export default Dropdown;
