import { useState } from 'react'

import './styles.scss'
import Backdrop from '../commons/Backdrop'
import CharacterCard from '../CharacterCard'
import SearchCharacter from '../SearchCharacter'
import { Character } from '@/interfaces/character'
import PaginationButtons from '../PaginationButtons'
import useCharacterList from '@/hooks/useCharacterList'

const CharactersList = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const { characters, isLoading } = useCharacterList(currentPage, searchTerm)

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1)
    }
  }

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm)
  }

  return (
    <>
      <div>
        <h1 className='title'>Personajes de Rick and Morty</h1>

        <SearchCharacter searchTerm={searchTerm} onSearch={handleSearch} />

        <div className='cards-container'>
          {characters.map((character: Character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
            />
          ))}
        </div>

        {isLoading && <Backdrop />}

        <PaginationButtons
          currentPage={currentPage}
          isLoading={isLoading}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
      </div>
    </>
  )
}

export default CharactersList
