import React from 'react'
import CustomBottom from '@/component/CustomBottom'
import { updateData } from '@/server/actions'
type EditTodoProps = {
    params : {
        id : string
    }
}
const EditTodo = ({params} : EditTodoProps) => {
  return (
    <div>
      <h2>Edit Todo</h2>
      <form action={updateData}>
        <input type="hidden" name='id' value={params.id} readOnly/>
        <input type="text" name='title' className='border border-rose-400 mb-2'/>
        <CustomBottom label="Update Todo"/>
      </form>
    </div>
  )
}

export default EditTodo
