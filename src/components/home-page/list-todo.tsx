import React from 'react'

function ListTodo() {
  return (
    <section
      id='list'
      className='min-h-[100dvh] border-t-2 border-t-neutral-800 px-10 lg:px-52 py-10'>
      <div className='w-full h-full font-bold text-2xl lg:text-4xl text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500'>
        {`List of your todo's`}
      </div>
      {/* Filters */}
      <div className='my-2'></div>
      {/* List */}
      <div className='card'>
        <div className=''>
          <p className='text-white'>Here</p>
        </div>
      </div>
    </section>
  )
}

export default ListTodo
