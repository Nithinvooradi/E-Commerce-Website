import React from 'react'

const Error = () => {
  return (
    <div className='grid grid-cols-1 items-center justify-items-center h-screen'>
        <div className='w-[96]'>
            <p className='text-xl font-inter font-bold text-white p-2 rounded-lg border bg-red-900'>
                Sorry😔!!  No Products match your filter and search ... Clear the filter and try again😁.
            </p>
        </div>
    </div>
  )
}

export default Error