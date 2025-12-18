export const ColorFilters = ({ value: colors, onChange }) => {
  function handleColorChange(e) {
    if (e.target.checked) {
      onChange(e.target.value, 'added');
    } else {
      onChange(e.target.value, 'removed');
    }
  }
  return (
    <div>
      <p>Filter by color</p>
      <div onChange={handleColorChange}>
        {colors.map((color) => {
          return (
            <label htmlFor={color} key={color}>
              <input type="checkbox" name="color" value={color} id={color} />
              {color}
            </label>
          );
        })}
      </div>
    </div>
  );
};
