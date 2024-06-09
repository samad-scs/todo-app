import { ArrowRight } from 'lucide-react'

function AddTodoForm() {
  return (
    <form className='z-30 w-[90%] lg:w-full relative max-w-xl mx-auto bg-zinc-800 opacity-50 h-10 rounded-full overflow-hidden transition duration-200'>
      <input
        required
        className='w-full relative text-sm sm:text-base z-50 border-none text-white bg-transparent h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20'
      />
      <button
        type='submit'
        className='absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-gray-100 bg-neutral-200 dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center'>
        <ArrowRight />
      </button>
    </form>
  )
}

export default AddTodoForm
