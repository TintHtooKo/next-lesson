import React from 'react'

type PostProps = {
    params : {
        // bracket htae mhr title so yin title write
        id : string
    }
}

const Post = ({params} : PostProps) => {
  return (
    <div>
      <h1>Post id = {params.id}</h1>
    </div>
  )
}

export default Post
