function InputField({
  label,
  amount,
  onInputFieldChange,
  onSelectChange,
  selectOptions = [],
  currency,
}) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label>{label}</label>
        <input
          type="number"
          placeholder="Currency"
          style={{ width: "300px", height: "20px" }}
          value={amount}
          onChange={onInputFieldChange}
        />
        <select onChange={onSelectChange}>
          {selectOptions.map((selectOption) => {
            <option selected={currency}>{selectOption}</option>;
          })}
        </select>
      </div>
    </>
  );
}

export default InputField;
