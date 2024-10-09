import { useState } from "react";

const optionsData = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

function SelectInput() {
  const [options, setOptions] = useState(optionsData); // Static list of options
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Handle checkbox change to add/remove items
  const handleCheckboxChange = (option) => {
    if (selectedOptions.some(selected => selected.value === option.value)) {
      // Remove option if already selected
      setSelectedOptions(selectedOptions.filter(selected => selected.value !== option.value));
    } else {
      // Add option if not selected
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  // Remove option from selected list
  const handleRemoveOption = (optionToRemove) => {
    setSelectedOptions(selectedOptions.filter(option => option.value !== optionToRemove.value));
  };

  return (
    <div className="custom-select-box">
      <div className="selected-options">
        {selectedOptions.map(option => (
          <div key={option.value} className="selected-option">
            <span>{option.label}</span>
            <button onClick={() => handleRemoveOption(option)}>&times;</button>
          </div>
        ))}
      </div>

      <div className="options-list">
        {options.map(option => (
          <label key={option.value} className="option-item">
            <input
              type="checkbox"
              checked={selectedOptions.some(selected => selected.value === option.value)}
              onChange={() => handleCheckboxChange(option)}
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
}

export default SelectInput