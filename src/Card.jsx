
import { useState, useEffect } from 'react'

export default function Card() {
  const [darkMode, setDarkMode] = useState (() => {

    const savedTheme = localStorage.getItem('darkMode');
    
    return savedTheme === 'true'

  }

  )


  

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }


  useEffect (() => {  
    localStorage.setItem('darkMode', darkMode)
  }


), [darkMode];

  return (
    <div
      className={`max-w-sm mx-auto p-6 shadow-md rounded-lg mt-5 transition duration-300 ${darkMode ? 'bg-pink-300' : 'bg-white'}`}
    >
      <img
        src="https://images.icon-icons.com/1674/PNG/512/person_110935.png"
        alt="avatar"
        className="rounded-full w-32 h-32 mx-auto"
      />
      <h2
        className={`mt-4 text-2xl font-semibold text-gray-800 text-center  ${darkMode ? 'text-white' : 'text-gray-600'}`}
      >
        {' '}
        BARBARA SOFIA LOPEZ
      </h2>
      <p
        className={`mt-2 text-gray-600 text-center ${darkMode ? 'text-white' : 'text-white-600'}`}
      >
        {' '}
        Desarrolladora de Software Front-End on habilidades en React y el diseño
        UI/UX
      </p>
      <button
        onClick={toggleTheme}
        className={`mt-4 px-4  py-2 rounded shadow-md ${darkMode ? 'bg-pink-500 text-white' : 'bg-gray-200 text-pink-800'} transition duration-300  `}
      >
        CAMBIAR TEMA
      </button>
    </div>
  )
}
