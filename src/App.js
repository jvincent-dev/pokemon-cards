import React, { useEffect, useState } from 'react'
import Pokedex from './components/pokedex'

export default function App() {
  const [shuffle, setShuffle] = useState(false)
  const [exp1, setExp1] = useState(0)
  const [exp2, setExp2] = useState(0)
  const [p1, setP1] = useState([])
  const [p2, setP2] = useState([])

  useEffect(() => {
    const temp1 = []
    const temp2 = [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]

    while(temp1 < temp2) {
      const randIdx = Math.floor(Math.random() * temp2.length)
      
      temp1.push(temp2.splice(randIdx, 1)[0])
    }

    setExp1(temp1.reduce((total, elem) => total + elem.base_experience, 0))
    setExp2(temp2.reduce((total, elem) => total + elem.base_experience, 0))

    setP1(temp1)
    setP2(temp2)
  }, [shuffle])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#88aced', padding: '16px' }}>
      <h1 style={{ textAlign: 'center', margin: 0 }}>Pokedex!</h1>

      <Pokedex data={p1} isWinner={exp1 > exp2} />

      <button
        style={{ fontSize: '16pt', padding: '8px', borderRadius: '8px', margin: '16px', alignSelf: 'center' }} onClick={() => setShuffle(!shuffle)}
      >Click Me To Shuffle</button>

      <Pokedex data={p2} isWinner={exp2 > exp1} />
    </div>
  )
}