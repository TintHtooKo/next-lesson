"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'


const CustomBottom = ({label} : {label: string}) => {
    const {pending} = useFormStatus();
  return (
    <div>
       <button type="submit" 
       className=" border border-1 p-2 block disabled:bg-black disabled:border-none" 
       disabled={pending} >
        {label || "DEFAULT"}
      </button>
    </div>
  )
}

export default CustomBottom
