import React, { useContext } from 'react'
import BlogsContext from '../context/BlogsContext'

const Search = ({darkTheme}) => {
   const {data,setData,searchTerm,setSearchTerm} = useContext(BlogsContext)
   console.log(data);
   function handleData(e){

   setSearchTerm(e.target.value)
     setData(data.filter(item => {
      return item.title?item.title:item.story_text.toLowerCase().includes(searchTerm.toLowerCase().trim())
     }))
   }

  return (
    <div className='search-box'>
      <input className={ darkTheme ? 'dark' : ''} type='text' placeholder='Search news...' value={searchTerm} onChange={(e) => handleData(e)}/>
    </div>
  )
}

export default Search
