import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <h1 className="text-2xl font-bold">Intercepting Routing</h1>
        <Link href="/intercepting-route/products">Go To Products</Link>
    </div>
  )
}

export default page