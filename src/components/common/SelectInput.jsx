import { Select, Space } from "antd";
import { LiaTimesSolid } from "react-icons/lia";



function SelectInput({ removeOption, options, value, setValue }) {
  // Remove option from selected list
  const handleChange = (value) => {
    debugger
    setValue(...value)

  };
  const { Option } = Select;

  return (
    <Select
      mode="multiple"
      style={{
        width: '100%',
      }}
      placeholder="select one country"
      defaultValue={['china']}
      onChange={handleChange}
      value={value}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          <div className="my-1 d-flex justify-content-between" onClick={() => { handleChange(option.value) }}>
            <div className="flex-grow-1">
              {option.emoji}
            </div>
            <div>
              <LiaTimesSolid onClick={() => { removeOption(option.value) }} />
            </div>
          </div>
        </option>
      ))}

    </Select>
  );
}

export default SelectInput