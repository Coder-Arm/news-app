
import React, { useContext } from 'react'
import BlogsContext from '../context/BlogsContext'


const Blogs = ({darkTheme}) => {
    const {data,setData} = useContext(BlogsContext)

    function deleteCard(id){
       setData(data.filter((item,idx) => {
        return idx!== id
       }))
    }
   setTimeout(() => console.log(data),500)
  return (
    <div className='blogs-container'>
      {data.map((item,idx) => {
        return (
            <div key={idx} className={ darkTheme ? 'card dark' : 'card'}>
              <h2 className={ darkTheme ? 'dark' : ''}>{item.title ? item.title : item.story_text}</h2>
              <div className='bottom-content'>
              <div>
              <span className={ darkTheme ? 'dark' : ''} >{item.author} | {item.num_comments} Comments</span>
              <button className={ darkTheme ? 'dark read-more' : 'read-more'} onClick = {() => window.open(item.url)}>Read more</button>
              </div>
              <div>
                <button onClick={() => deleteCard(idx)} className='delete'>Remove</button>
              </div>
              </div>
            </div>
        )

      })}
    </div>
  )
}

export default Blogs
