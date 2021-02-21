import React from 'react'
import ComponentE from './ComponentE'

function ComponentC() {
  console.log("test")
  return (
    <div>
      <ComponentE/>
    </div>
  )
}

export default ComponentC
