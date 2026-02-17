import React from 'react'

function RoomCard({img, name}) {
  return (
    <div className='rounded-lg w-32 h-auto flex-col justify-between p-5' style={{backgroundImage:img}}>

    <div>
      Heart icon
    </div>
      <div className='text-2xl from-black to-transparent h-fit'>
        {name}
        <button>View Room</button>
      </div>
    </div>
  )
}

export default RoomCard
