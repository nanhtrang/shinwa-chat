import { useState } from "react";
import { Select, Checkbox } from "antd";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

function SelectUtil() {
  const [options, setOptions] = useState(
    Array.from({ length: 5 }, (_, i) => ({
      label: `${i + 1}`,
      value: i + 1,
    }))
  );
  const [selectedValues, setSelectedValues] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (value) => {
    setSelectedValues(value);
    console.log(`selected ${value}`);
  };

  const handleRemoveOption = (optionValue) => {
    setOptions(options.filter((option) => option.value !== optionValue));
    setSelectedValues(selectedValues.filter((value) => value !== optionValue));
  };

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const handleKeyDown = (event) => {
    if (
      event.key === "Enter" &&
      searchValue &&
      !options.some((option) => option.label === searchValue)
    ) {
      const newOption = {
        label: searchValue,
        value: searchValue,
      };
      setOptions([...options, newOption]);
      setSelectedValues([...selectedValues, searchValue]);
      setSearchValue("");
    }
  };

  return (
    <>
      <Select
        mode="multiple"
        style={{ width: "300px" }}
        placeholder="Please select or enter a new value"
        value={selectedValues}
        onChange={handleChange}
        onSearch={handleSearch}
        onKeyDown={handleKeyDown}
        optionLabelProp="label"
        optionFilterProp="label"
        showSearch
        filterOption={(input, option) =>
          option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        dropdownRender={(menu) => (
          <>
            {menu}
            {searchValue &&
              !options.some((option) => option.label === searchValue) && (
                <div
                  style={{ padding: "8px", cursor: "pointer" }}
                  onClick={() => handleKeyDown({ key: "Enter" })}
                >
                  <PlusOutlined /> Add "{searchValue}"
                </div>
              )}
          </>
        )}
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value} label={option.label}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Checkbox checked={selectedValues.includes(option.value)}>
                {option.label}
              </Checkbox>
              <CloseOutlined
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveOption(option.value);
                }}
              />
            </div>
          </Option>
        ))}
      </Select>
    </>
  );
}

export default SelectUtil;
