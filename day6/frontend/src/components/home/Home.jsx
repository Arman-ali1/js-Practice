import React from 'react'
import {useSelector, useDispatch} from 'react-redux'

function Home() {

    const dispatch = useDispatch(state=>state.currentUser);
    console.log(dispatch);

  return (
    <div>
      <div>
        <h1>Home Users</h1>
        <ul>
            {dispatch.map((currentUser) => (
                <li key={currentUser.id}>
                <div className='text-white'>{currentUser.name}</div>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
