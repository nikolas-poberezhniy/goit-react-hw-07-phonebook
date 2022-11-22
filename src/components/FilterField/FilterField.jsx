import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleInput = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label htmlFor="filterField">
      Filter
      <input id="filterField" type="text" onChange={handleInput} />
    </label>
  );
};
