function InputField({
  styles = [],
  label,
  amount,
  onInputFieldChange,
  onSelectChange,
  selectOptions = [],
  currency,
  disable = false,
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
          readOnly={disable}
        />
        <select value={currency} onChange={onSelectChange}>
          {selectOptions.map((selectOption) => {
            return <option key={selectOption}>{selectOption}</option>;
          })}
        </select>
      </div>
    </>
  );
}

export default InputField;
