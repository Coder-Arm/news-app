import React, { useState } from 'react'
import './App.css'
import Search from './Components/Search'
import Pagination from './Components/Pagination'
import Blogs from './Components/Blogs'


const App = () => {
const [darkTheme,setDarkTheme] =useState(false);
function themeSwitcher(){
  if(!darkTheme) setDarkTheme(true);
  else setDarkTheme(false)

}

  return (
    <main className={darkTheme ? 'dark' : ''}>
     <h1 className={darkTheme ? 'dark' : ''}>Read the latest news</h1>
     <button onClick={() => themeSwitcher()} className='theme-btn'><i style={ darkTheme ? {display : 'none'} : {display : 'unset'}} class="fa-solid fa-moon"></i><i style={ !darkTheme ? {display : 'none'} : {display : 'unset',color : 'white'}} class="fa-regular fa-lightbulb"></i></button>
     <Search darkTheme = {darkTheme}/>
     <Pagination/>
     <Blogs darkTheme = {darkTheme} />
    </main>
  )
}

export default App
