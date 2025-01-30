import React from 'react'
import Header from './_components/Header'

function Provider({children}) {
  return (
    <div>
        <Header/>

        <div className="mt-30 w-auto h-auto">
            {children}
        </div>
    </div>
  )
}

export default Provider