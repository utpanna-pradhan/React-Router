import React from 'react'
import {useParams} from 'react-router'
function User() {
    const {userid} = useParams();
  return (
    <div className='text-center text-3xl p-8 bg-gray-100'>
      User ID : {userid}
    </div>
  )
}

export default User
