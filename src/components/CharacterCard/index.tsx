import { FC } from 'react'
import Image from 'next/image'

import './styles.scss'
import { Character } from '@/interfaces/character'

const CharacterCard: FC<Character> = ({ name, image, status, species }) => {
  return (
    <div className='card' data-testid='character-card'>
      <Image width={200} height={200} priority={true} alt={name} src={image} />
      <h2>{name}</h2>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
    </div>
  )
}

export default CharacterCard
