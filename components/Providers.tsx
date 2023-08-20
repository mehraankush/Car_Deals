"use client"
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

interface Props{
    children:ReactNode
}
const Provider = (props:Props) => {
  return (
    <div>
       <SessionProvider>
        {props.children}
       </SessionProvider>
    </div>
  )
}

export default Provider