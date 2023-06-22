import React from 'react'

import './styles.scss'

interface PaginationButtonsProps {
  currentPage: number
  isLoading: boolean
  handlePreviousPage: () => void
  handleNextPage: () => void
}

const PaginationButtons: React.FC<PaginationButtonsProps> = ({
  currentPage,
  isLoading,
  handlePreviousPage,
  handleNextPage,
}) => {
  return (
    <div className='buttons-container'>
      <button
        className={`page-button ${currentPage === 1 ? 'disabled' : ''} ${
          isLoading ? 'loading' : ''
        }`}
        onClick={handlePreviousPage}
        disabled={currentPage === 1 || isLoading}
      >
        {isLoading ? 'Cargando...' : 'Página anterior'}
      </button>

      <button
        className={`page-button ${isLoading ? 'loading' : ''}`}
        onClick={handleNextPage}
        disabled={isLoading}
      >
        {isLoading ? 'Cargando...' : 'Página siguiente'}
      </button>
    </div>
  )
}

export default PaginationButtons
