import { useState, useEffect } from 'react'

import { fetchCharacters } from '@/services/characters'

const useCharacterList = (currentPage: number, searchTerm: string) => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const data = await fetchCharacters(currentPage, searchTerm)
        setCharacters(data.results)
      } catch (error) {
        console.log('Error al obtener los personajes')
        setCharacters([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [currentPage, searchTerm])

  return { characters, isLoading }
}

export default useCharacterList
