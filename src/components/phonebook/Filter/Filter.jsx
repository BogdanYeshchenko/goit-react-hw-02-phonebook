export const Filter = ({ onChangeFilter, filterWord }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={onChangeFilter}
        name="filter"
        value={filterWord}
      />
    </div>
  );
};
