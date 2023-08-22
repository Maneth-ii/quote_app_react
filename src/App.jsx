import React, { useEffect, useState } from 'react'
import './index.css'

function App() {
const [data , setData] = useState('')

    useEffect(()=> {
      fetch('https://dummyjson.com/quotes/random')
      .then(res => res.json())
      .then((data) => setData(data));
    },[])
  


  return(
    <React.Fragment>
      <p className='text-sm justify-self-end'>created by Maneth thimasha</p>
      <div className='flex flex-col w-100 mx-auto h-[90vh] text-4xl justify-center items-center'>
        <h1 className='text-white drop-shadow-3xl text-center'><p>" {data.quote} "</p></h1>
        <p className='mt-4 self-end mr-16'><p>' {data.author} '</p></p>
      </div>
    </React.Fragment>
  )
  
}

export default App
