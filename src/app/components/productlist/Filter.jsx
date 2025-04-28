const Filter = ({ category, checked, onChange }) => {
  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only" // Skjuler standard checkboxen
      />
      <div
        className={`w-4 h-4 border-1 border-[#8F8A85] ${
          checked ? "bg-[#8F8A85] border-[#8F8A85]" : "bg-white"
        }`}
      >
        {checked && (
          <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      <span className="ml-2 text-[#8F8A85]">{category}</span>{" "}
    </label>
  );
};

export default Filter;
