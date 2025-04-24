const Filter = ({ category, checked, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {category}
    </label>
  );
};

export default Filter;
