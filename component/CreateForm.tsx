import { createData, createPost } from '@/server/actions'
import React from 'react'
import CustomBottom from './CustomBottom'

const CreateForm = () => {
  return (
        <form action={createPost} className=" mt-2 p-5">
            <input 
            className=" border border-1 border-blue-600 focus:outline-none p-2 mb-2" 
            type="text" 
            name="title" 
            required
            placeholder='title......'/>
            <br />
            <textarea
            className=" border border-1 border-blue-600 focus:outline-none p-2 mb-2" 
            name="desc" 
            required
            placeholder='desc......'
            />
            
         <CustomBottom label="Create Post"/>
        </form>
  )
}

export default CreateForm
