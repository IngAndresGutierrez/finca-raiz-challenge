import React, { ChangeEvent, FC } from 'react'

import './styles.scss'

type SearchCharacterProps = {
  searchTerm: string
  onSearch: (searchTerm: string) => void
}

const SearchCharacter: FC<SearchCharacterProps> = ({
  searchTerm,
  onSearch,
}) => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value)
  }

  return (
    <div className='search-character-container'>
      <input
        type='text'
        value={searchTerm}
        onChange={handleSearch}
        className='search-character'
        data-testid='search-character'
        placeholder='Buscar por nombre'
      />
    </div>
  )
}

export default SearchCharacter
