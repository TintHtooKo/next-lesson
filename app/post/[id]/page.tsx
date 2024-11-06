import { getPost } from '@/server/actions'
import React from 'react'

type PostProp = {
    params : {
        id : number;
    }
}

const PostDetail = async({params}:PostProp) => {
    const {success} = await getPost(params.id)
    const {title,desc} = success
  return (
    <div className=' mt-5'>
      <h2 className=' font-bold text-lg'>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}

export default PostDetail
