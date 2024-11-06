import React from 'react'
import CustomBottom from '@/component/CustomBottom'
import { getPost, updateData, updatePost } from '@/server/actions'
type EditPostProps = {
    params : {
        id : number
    }
}
const EditTodo = async({params} : EditPostProps) => {
  const {success} = await getPost(params.id)
  return (
    <div>
      <h2>Edit Post</h2>
      <form action={updatePost}>
        <input  type="hidden" name='id' value={params.id} readOnly placeholder='title .....' required/>
        {/* value so yin input htae mhr br mha yay loh ma ya */}
        <input defaultValue={success?.title} type="text" name='title' className='border border-rose-400 mb-2'/><br />
        <textarea defaultValue={success?.desc} name='desc' className='border border-rose-400 mb-2' />
        <CustomBottom label="Update Post"/>
      </form>
    </div>
  )
}

export default EditTodo
