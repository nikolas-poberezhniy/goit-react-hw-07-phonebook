import React from 'react';
import { FilterBlock, FindContactWrapp } from './FilterBlock.styled';
import { setNameFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getNameFilter } from '../../redux/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filteredName = useSelector(getNameFilter);

  return (
    <FindContactWrapp>
      <FilterBlock>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filteredName}
          onChange={event => dispatch(setNameFilter(event.currentTarget.value))}
        />
      </FilterBlock>
    </FindContactWrapp>
  );
}
