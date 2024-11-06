import { deleteData, deletePost } from '@/server/actions'
import Link from 'next/link'
import React from 'react'

type BlogCardProps = {
    id : number,
    title : string,
    desc : string
}

const BlogCard = ({id ,title,desc} : BlogCardProps) => {
  return (
    <div className=" mt-5">
            <p className='font-bold'>{title}</p>
            <p className=' text-gray-600'>{desc.slice(0,30)} <Link href={`post/${id}`} className=' text-blue-600'>see more ...</Link></p>
            <div className="">
            <form action={deletePost}>
              <input type="hidden" name="id" value={id} readOnly/>
              <button type="submit" 
              className=" underline"   
              >Delete</button>
            </form>
            <Link href={`/update/${id}`} className=" text-yellow-500 underline">Edit</Link>
            </div>
            <hr className=" mt-2"/>
    </div>
  )
}

export default BlogCard
