import React from 'react'
import { useSelector } from 'react-redux'

export default function Loading() 
{
  const state=useSelector((state)=>state.Auth_Slice)
  return (
    <div className="isLoading">
    {state.isLoading ? "loading..." : null}
</div>
  )
}
