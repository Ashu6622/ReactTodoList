import React from 'react'

const Inputtasks = ({writeTask , addtask,temp}) => {
  return (
    <div className='writetask'>
        <input type="text" value={temp} placeholder='Write your Task' onChange={writeTask} autoFocus/>
        <button className='addbtn' onClick={addtask}>Add</button>
    </div>
  )
}

export default Inputtasks