import React from 'react'

async function Analytics() {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(0);
        }, 7000);
    })
  return (
    <div>Analytics</div>
  )
}

export default Analytics