import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className='bg-black'>
        <h1 className='text-red-600'>Weather Project with Next</h1>
      </main>
    </>
  )
}
