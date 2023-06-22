import axios from 'axios'

import { ENV } from '../../env'

export const fetchCharacters = async (page: number, searchTerm: string) => {
  try {
    const queryParams = searchTerm ? `&name=${searchTerm}` : ''
    const response = await axios.get(
      `${ENV.BASE_URL}/character?page=${page}${queryParams}`
    )

    return response.data
  } catch (error) {
    console.log(error)
    throw new Error('Error al obtener los personajes')
  }
}
