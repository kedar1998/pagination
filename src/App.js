import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {

  const {loading , data} = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);


  useEffect(() =>{
    if(loading){
      return ;
    }
    setFollowers(data[page])
  }, [loading, page])


  return <main>
    <div className='section-title'>
      <h1>{loading ? 'loading...' : 'Pagination'}</h1>
      <div className='underline'></div>
    </div>
    <section className='followers'>
      <div className='container'>
        {followers.map((follower) =>{
          return (
            <Follower key={follower.id} {...follower}/>
          )
        })}
      </div>
      {!loading &&  <div className='btn-container'>
      {page !== 0 && <button className='prev-btn' onClick={() =>{
        setPage((prev) => prev-1)
      }}>prev</button>}
      
        {data.map((item, index) =>{
          return (
            <button key={index} className={`page-btn ${index === page ? 'active-btn' : ''}`} onClick={() =>{setPage(index)}}>{index+1}</button>
          )
        })}
        {page !== 11 && <button className='prev-btn' onClick={() =>{
          setPage((prev) => prev+1)
        }}>next</button>}
        
      </div> 
      
      }
    </section>
  </main>
}

export default App
