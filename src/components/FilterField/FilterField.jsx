export const Filter = ({ filter }) => {
  return (
    <label htmlFor="filterField">
      Filter
      <input id="filterField" type="text" onChange={filter} />
    </label>
  );
};
