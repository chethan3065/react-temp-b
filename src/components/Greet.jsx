import React from 'react'

export default function Greet({name = "John", age = "20"}) {
  return (
    <div>
        <h2>Hello {name}, {age} </h2>
    </div>
  )
}
