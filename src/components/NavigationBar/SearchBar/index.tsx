import styled from '@emotion/styled';
import SearchResultsList from 'components/NavigationBar/SearchResultsList';
import useSearch from 'hooks/useSearch';
import { useState } from 'react';

const SearchForm = styled.form({
  width: '90%',
  maxWidth: '300px',
  display: 'flex',
  flexDirection: 'column',
});

const SearchInput = styled.input({
  height: '20px',
});

const SearchBar = () => {
  const { searchWord, setSearchWord, results } = useSearch();
  const [isActive, setIsActive] = useState(false);

  return (
    <SearchForm>
      <SearchInput
        type="text"
        placeholder="Search locations..."
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      />

      {isActive && results && results.length > 0 && (
        <SearchResultsList results={results} />
      )}
    </SearchForm>
  );
};

export default SearchBar;