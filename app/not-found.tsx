import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className=' text-center'>
      <h2>404 not found</h2>
      <Link href={"/"} className=' underline text-red-700 border bg-black'>Go Home</Link>
    </div>
  )
}

export default NotFound
