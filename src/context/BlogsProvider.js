
import React, { useState,useEffect } from 'react'
import axios from 'axios';
import BlogsContext from './BlogsContext'


const BlogsProvider = ({children}) => {
    const [data,setData] = useState([]);
    const [searchTerm,setSearchTerm] = useState("Message")
    const [prevSearchTerm,setPrevSearchTerm] = useState("")

    useEffect(() => {
      if(searchTerm !== prevSearchTerm){
        try{
     axios.get(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`)
     .then(response => setData(response.data.hits))
        }
        catch(error){
          console.log(error);
        }
        setPrevSearchTerm(searchTerm);
      }
    },[data])

  return (
    <BlogsContext.Provider value={{data,setData,searchTerm,setSearchTerm}}>
      {children}
    </BlogsContext.Provider>
  )
}

export default BlogsProvider
