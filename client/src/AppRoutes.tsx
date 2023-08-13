import { useState } from "react"

function AppRoutes() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  
  return (
    <div className={ isDarkMode ? 'dark app ': 'light app'}>
       <h2 className='h1'>Bienvenue sur Connekta</h2>
       <button 
           className="button"
           onClick={() => setIsDarkMode(!isDarkMode)}
        >
          { isDarkMode ? 'switch to light': 'switch to dark'}
        </button>
    </div>
  )
}

export default AppRoutes
