'use client' // Error boundaries must be Client Components
import { useEffect } from 'react'
 
export default function Error({ error, reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2 className='text-2xl font-bold'>Something went wrong!</h2>
      <button
      className='border-2 p-2 rounded-md bg-blue-600'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}