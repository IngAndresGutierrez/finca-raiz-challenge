import { fireEvent, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import CharactersList from '../components/CharactersList'

describe('CharactersList', () => {
  test('renders correctly', () => {
    const { container } = render(<CharactersList />)
    expect(container).toMatchSnapshot()
  })

  test('renders title correctly', () => {
    const { getByText } = render(<CharactersList />)
    expect(getByText('Personajes de Rick and Morty')).toBeInTheDocument()
  })

  test('renders character cards', async () => {
    const { getAllByTestId } = render(<CharactersList />)

    await waitFor(() => {
      const characterCards = getAllByTestId('character-card')
      expect(characterCards.length).toBeGreaterThan(0)
    })
  })

  test('renders search character input', () => {
    const { getByPlaceholderText } = render(<CharactersList />)

    const searchInput = getByPlaceholderText('Buscar por nombre')
    expect(searchInput).toBeInTheDocument()
  })

  test('calls handleSearch function with correct search term', () => {
    const { getByPlaceholderText } = render(<CharactersList />)

    const searchInput = getByPlaceholderText('Buscar por nombre')
    fireEvent.change(searchInput, { target: { value: 'Rick' } })

    expect(searchInput).toHaveValue('Rick')
  })

  test('renders previous page button', async () => {
    const { getByText } = render(<CharactersList />)

    await waitFor(() => {
      const previousPageButton = getByText('Página anterior')
      expect(previousPageButton).toBeInTheDocument()
    })
  })

  test('renders next page button', async () => {
    const { getByText } = render(<CharactersList />)

    await waitFor(() => {
      const nextPageButton = getByText('Página siguiente')
      expect(nextPageButton).toBeInTheDocument()
    })
  })

  test('renders next page button clicked', async () => {
    const { getByText, getAllByTestId } = render(<CharactersList />)

    await waitFor(() => {
      const nextPageButton = getByText('Página siguiente')
      fireEvent.click(nextPageButton)
      const characterCards = getAllByTestId('character-card')
      expect(characterCards.length).toBeGreaterThan(0)
    })
  })

  test('renders previous page button clicked', async () => {
    const { getByText, getAllByTestId } = render(<CharactersList />)

    await waitFor(() => {
      const previousPageButton = getByText('Página anterior')
      fireEvent.click(previousPageButton)
      const characterCards = getAllByTestId('character-card')
      expect(characterCards.length).toBeGreaterThan(0)
    })
  })
})
