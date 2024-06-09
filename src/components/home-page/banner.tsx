import { BackgroundBeams } from '@/components/ui/background-beams'
import { ChevronsDown } from 'lucide-react'
import AddTodoForm from './add-todo'
import Link from 'next/link'

export default function BannerHome() {
  return (
    <div className='h-[100dvh] lg:h-[40dvh] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased'>
      <div className='max-w-2xl mx-auto p-4'>
        <h1 className='relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500  text-center font-bold'>
          Add todo
        </h1>
        <p></p>
        <p className='text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10'>
          {`add some task you need to complete here`}
        </p>
      </div>
      <AddTodoForm />
      <div className='z-20 lg:hidden flex flex-col items-center gap-4 my-10 bottom-20 transition-all'>
        <Link href={'#list'}>
          <p className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500  text-center font-bold'>
            Scroll down
          </p>
        </Link>

        <ChevronsDown className='from-neutral-200 text-neutral-400' />
      </div>
      <BackgroundBeams />
    </div>
  )
}
