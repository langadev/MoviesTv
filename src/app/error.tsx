 'use client'
import { useEffect } from "react"
function error({error, reset}) {

    useEffect(()=>{
        console.log(error)
    }, [error])
  return (
    <div className="text-center mt-10">
        <h1>Something went wrong Please Try again later...</h1>
        <button className="hover:text-amber-600"></button>
    </div>
  )
}

export default error