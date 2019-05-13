import React, { useState } from 'react'
import { Link } from 'gatsby'
import Select from 'react-select'

const options = [
  { value: 'successive', label: 'successive' },
  { value: 'immediate', label: 'immediate' }
]

const customStyles = {
  control: () => ({
    width: 200,
    display: 'flex'
  }),
  input: () => ({
    color: '#fff'
  }),
  singleValue: () => ({
    color: '#ccc'
  }),
  menu: (provided) => ({
    ...provided,
    padding: 0,
    margin: 0
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
    margin: 0
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #111',
    background: '#222',
    color: state.isSelected ? '#fff' : '#888',
    margin: 0,
    borderRadius: 0,
    cursor: 'pointer',
    ':hover': { background: '#111' }
  })
}

const Header = ({ setMode }) => {
  function onChange (option) {
    setMode(option.value)
  }
  return (
    <header className='header'>
      <Link to='/' className='header__link'>
        Home
      </Link>
      <Link to='/page-2' className='header__link'>
        Page-2
      </Link>
      <div className='mode'>
        <label className='mode__label'>mode: </label>
        <Select
          className='mode__select'
          placeholder={options[0].label}
          onChange={onChange}
          options={options}
          styles={customStyles}
        />
      </div>
    </header>
  )
}

export default Header
