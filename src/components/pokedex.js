import React from 'react'
import Card from './card'

export default function Pokedex({ data, isWinner }) {
  return (
    <div>
      <h2 style={{ marginTop: 0, textAlign: 'center', color: isWinner ? 'green' : 'red' }}>{isWinner ? 'Winner' : 'Loser'}</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        {
          data.map((item, i) => <Card key={i} {...item} />)
        }
      </div>
    </div>
  )
}