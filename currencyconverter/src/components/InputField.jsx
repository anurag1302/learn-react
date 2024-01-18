function InputField({
  label,
  amount,
  onInputFieldChange,
  onSelectChange,
  selectOptions = [],
  selectedOption = "usd",
  disable = false,
}) {
  return (
    <div style={{ border: "1px solid black", padding: "50px" }}>
      <div style={{ display: "flex", justifyContent: "left" }}>
        <label>
          <strong>{label}</strong>
        </label>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input
          type="number"
          placeholder="Currency"
          style={{ width: "500px", height: "20px", fontSize: "large" }}
          value={amount}
          onChange={onInputFieldChange}
          readOnly={disable}
        />
        <select
          style={{ width: "100px", fontSize: "large" }}
          value={selectedOption}
          onChange={onSelectChange}
        >
          {selectOptions.map((selectOption) => {
            return <option key={selectOption}>{selectOption}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default InputField;
