import React, {useContext} from 'react'
import {UserContext, LanguageContext} from '../App'

function ComponentF() {
  const user = useContext(UserContext)
  const language = useContext(LanguageContext)
  return (
    <div>
      <div>{user.name} : {language}</div>
    </div>
  )
}

export default ComponentF
