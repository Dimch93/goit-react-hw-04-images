import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';
import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchSpan,
} from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState({
    searchName: '',
    inputValue: '',
  });

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValue(value.trim());

    onSubmit(value);
    reset();
  };

  const reset = () => {
    setValue({ inputValue: '' });
  };

  const { inputValue } = value;

  return (
    <header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton>
          <BsSearch />
          <SearchSpan>Search</SearchSpan>
        </SearchButton>
        <SearchInput
          name="searchName"
          type="text"
          id="search"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchForm>
    </header>
  );
};
