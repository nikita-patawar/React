import React, { useState } from 'react'
import User from './User'
import UserClass from './UserClass'

const About = () => {
  let[count,setCount]=useState(0)
  const increment=(c)=>{
    setCount(count+c)

  }
  return (
    <>
    <div>About</div>
    {count}
    {/* <button onClick={incrementCount}>Click Here</button> */}
    <button onClick={()=>increment(3)}>IncrementBy3</button>
    <button onClick={()=>increment(1)}>IncrementBy1</button> 
    {/* <User name={"Nikita Patawar(function)"}></User> */}
    {/* <UserClass name={"Nikita Patawar(class)"}></UserClass> */}
    </>
  )
}

export default About