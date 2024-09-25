import React from 'react'

function layout({analytics, team, children}: {analytics: React.ReactNode, team: React.ReactNode, children: React.ReactNode}) {
  return (
    <div className='flex flex-col items-center'>
        <h1 className="text-xl">Layout</h1>
        <div className='grid grid-cols-3 border-2 gap-5'>
            {analytics}
            {team}
            {children}
        </div>
    </div>
  )
}

export default layout