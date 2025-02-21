import React, { Suspense } from 'react'

function layout({children}) {
  return (
    <div>
        <Suspense fallback={<div>Loading...</div>}>
        {children}
        </Suspense>
    </div>
  )
}

export default layout
