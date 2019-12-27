import React from 'react'
import '../App.css'

export default function Card({ id, name, type, base_experience }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '2px 2px 4px #777',
        margin: '16px',
        padding: '10px',
        width: '250px',
        borderRadius: '8px',
        backgroundColor: '#fff'
      }}
    >
      <p style={{ fontWeight: 'bold', fontSize: '16pt' }}>{name}</p>

      <div style={{ backgroundColor: '#cecece', padding: 8 }} className='Pokeimage'>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id < 1000 ? ("00" + id.toString()).slice(-3) : id}.png`}
          alt={name}
          style={{ height: 200, width: 200 }}
        />
      </div>

      <p>Type: {type}</p>

      <p>EXP: {base_experience}</p>
    </div>
  )
}